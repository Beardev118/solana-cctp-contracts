import dotenv from "dotenv";
import Web3 from "web3";
import fetch from "node-fetch";
import { AbiItem } from "web3-utils";

import "dotenv/config";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import * as spl from "@solana/spl-token";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import {
    SOLANA_USDC_ADDRESS,
    decodeEventNonceFromMessage,
    getAnchorConnection,
    getPrograms,
    getReceiveMessagePdas,
    waitForTransaction,
} from "./utils";

dotenv.config();

const tokenMessengerAbi: AbiItem[] = require("./abis/cctp/TokenMessenger.json");
const usdcAbi: AbiItem[] = require("./abis/Usdc.json");

const main = async () => {
    const web3 = new Web3(process.env.ETH_TESTNET_RPC as string);

    // Add ETH private key used for signing transactions
    const ethSigner = web3.eth.accounts.privateKeyToAccount(
        process.env.ETH_PRIVATE_KEY as string
    );
    web3.eth.accounts.wallet.add(ethSigner);

    // Testnet Contract Addresses
    const ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS =
        "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5";
    const USDC_ETH_CONTRACT_ADDRESS =
        "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";

    // initialize contracts using address and ABI
    const ethTokenMessengerContract = new web3.eth.Contract(
        tokenMessengerAbi,
        ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS,
        { from: ethSigner.address }
    );
    const usdcEthContract = new web3.eth.Contract(
        usdcAbi,
        USDC_ETH_CONTRACT_ADDRESS,
        { from: ethSigner.address }
    );

    // ARB destination address
    const mintRecipient = process.env.USER_TOKEN_ACCOUNT as string;
    const buffer = bs58.decode(mintRecipient);
    const destinationAddressInBytes32 = "0x" + buffer.toString("hex");
    const SOL_DESTINATION_DOMAIN = 5;

    // Amount that will be transferred
    const amount = process.env.AMOUNT as string;

    // STEP 1: Approve messenger contract to withdraw from our active eth address
    const approveTxGas = await usdcEthContract.methods
        .approve(ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, amount)
        .estimateGas();
    const approveTx = await usdcEthContract.methods
        .approve(ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, amount)
        .send({ gas: approveTxGas.toString() });
    const approveTxReceipt = await waitForTransaction(
        web3,
        approveTx.transactionHash
    );
    console.log("ApproveTxReceipt: ", approveTxReceipt);

    // STEP 2: Burn USDC
    const burnTxGas = await ethTokenMessengerContract.methods
        .depositForBurn(
            amount,
            SOL_DESTINATION_DOMAIN,
            destinationAddressInBytes32,
            USDC_ETH_CONTRACT_ADDRESS
        )
        .estimateGas();

    const burnTx = await ethTokenMessengerContract.methods
        .depositForBurn(
            amount,
            SOL_DESTINATION_DOMAIN,
            destinationAddressInBytes32,
            USDC_ETH_CONTRACT_ADDRESS
        )
        .send({ gas: burnTxGas.toString() });
    const burnTxReceipt = await waitForTransaction(
        web3,
        burnTx.transactionHash
    );
    console.log("BurnTxReceipt: ", burnTxReceipt);

    // STEP 3: Retrieve message bytes from logs
    const transactionReceipt = await web3.eth.getTransactionReceipt(
        burnTx.transactionHash
    );
    const eventTopic = web3.utils.keccak256("MessageSent(bytes)");
    const log: any = transactionReceipt.logs.find(
        (l: any) => l.topics[0] === eventTopic
    );
    const messageBytes: any = web3.eth.abi.decodeParameters(
        ["bytes"],
        log.data
    )[0];
    const messageHash = web3.utils.keccak256(messageBytes);

    console.log(`MessageBytes: ${messageBytes}`);
    console.log(`MessageHash: ${messageHash}`);

    // STEP 4: Fetch attestation signature
    let attestationResponse: any = { status: "pending" };
    while (attestationResponse.status != "complete") {
        const response = await fetch(
            `https://iris-api-sandbox.circle.com/attestations/${messageHash}`
        );
        attestationResponse = await response.json();
        await new Promise((r) => setTimeout(r, 2000));
    }

    const attestationSignature = attestationResponse.attestation;
    console.log(`Signature: ${attestationSignature}`);

    // STEP 5: Solana receive message

    const provider = getAnchorConnection();

    const { messageTransmitterProgram, tokenMessengerMinterProgram } =
        getPrograms(provider);

    // Init needed variables
    const usdcAddress = new PublicKey(SOLANA_USDC_ADDRESS);
    const userTokenAccount = new PublicKey(process.env.USER_TOKEN_ACCOUNT);
    const remoteTokenAddressHex = process.env.REMOTE_TOKEN_HEX!;
    const remoteDomain = process.env.REMOTE_DOMAIN!;
    const messageHex = messageBytes;
    const attestationHex = attestationSignature;
    const nonce = decodeEventNonceFromMessage(messageHex);

    // Get PDAs
    const pdas = await getReceiveMessagePdas(
        { messageTransmitterProgram, tokenMessengerMinterProgram },
        usdcAddress,
        remoteTokenAddressHex,
        remoteDomain,
        nonce
    );

    // accountMetas list to pass to remainingAccounts
    const accountMetas: any[] = [];
    accountMetas.push({
        isSigner: false,
        isWritable: false,
        pubkey: pdas.tokenMessengerAccount.publicKey,
    });
    accountMetas.push({
        isSigner: false,
        isWritable: false,
        pubkey: pdas.remoteTokenMessengerKey.publicKey,
    });
    accountMetas.push({
        isSigner: false,
        isWritable: true,
        pubkey: pdas.tokenMinterAccount.publicKey,
    });
    accountMetas.push({
        isSigner: false,
        isWritable: true,
        pubkey: pdas.localToken.publicKey,
    });
    accountMetas.push({
        isSigner: false,
        isWritable: false,
        pubkey: pdas.tokenPair.publicKey,
    });
    accountMetas.push({
        isSigner: false,
        isWritable: true,
        pubkey: userTokenAccount,
    });
    accountMetas.push({
        isSigner: false,
        isWritable: true,
        pubkey: pdas.custodyTokenAccount.publicKey,
    });
    accountMetas.push({
        isSigner: false,
        isWritable: false,
        pubkey: spl.TOKEN_PROGRAM_ID,
    });
    accountMetas.push({
        isSigner: false,
        isWritable: false,
        pubkey: pdas.tokenMessengerEventAuthority.publicKey,
    });
    accountMetas.push({
        isSigner: false,
        isWritable: false,
        pubkey: tokenMessengerMinterProgram.programId,
    });

    const receiveMessageTx = await messageTransmitterProgram.methods
        .receiveMessage({
            message: Buffer.from(messageHex.replace("0x", ""), "hex"),
            attestation: Buffer.from(attestationHex.replace("0x", ""), "hex"),
        })
        .accounts({
            payer: provider.wallet.publicKey,
            caller: provider.wallet.publicKey,
            authorityPda: pdas.authorityPda,
            messageTransmitter: pdas.messageTransmitterAccount.publicKey,
            usedNonces: pdas.usedNonces,
            receiver: tokenMessengerMinterProgram.programId,
            systemProgram: SystemProgram.programId,
        })
        .remainingAccounts(accountMetas)
        .rpc();

    console.log("\n\nreceiveMessage Tx: ", receiveMessageTx);
};

main().catch(console.error);
