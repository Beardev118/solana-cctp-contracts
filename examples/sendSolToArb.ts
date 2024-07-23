import "dotenv/config";
import * as anchor from "@coral-xyz/anchor";
import { PublicKey, Keypair } from "@solana/web3.js";
import * as spl from "@solana/spl-token";
import { getBytes } from "ethers";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import {
    SOLANA_USDC_ADDRESS,
    evmAddressToBytes32,
    getAnchorConnection,
    getDepositForBurnPdas,
    getMessages,
    getPrograms,
    solanaAddressToHex,
    waitForTransaction,
} from "./utils";

const messageTransmitterAbi: AbiItem[] = require("./abis/cctp/MessageTransmitter.json");

const main = async () => {
    const provider = getAnchorConnection();

    const { messageTransmitterProgram, tokenMessengerMinterProgram } =
        getPrograms(provider);

    // Init needed variables
    const usdcAddress = new PublicKey(SOLANA_USDC_ADDRESS);
    const userTokenAccount = new PublicKey(process.env.USER_TOKEN_ACCOUNT);

    // Default to 1 USDCSOL (e.g. $0.000001)
    const amount = new anchor.BN(process.env.AMOUNT ?? 1);
    const destinationDomain = Number(process.env.DEST_DOMAIN!);
    // mintRecipient is a bytes32 type so pad with 0's then convert to a solana PublicKey
    const mintRecipient = new PublicKey(
        getBytes(evmAddressToBytes32(process.env.MINT_RECIPIENT_HEX!))
    );

    // Get pdas
    const pdas = getDepositForBurnPdas(
        { messageTransmitterProgram, tokenMessengerMinterProgram },
        usdcAddress,
        destinationDomain
    );

    // Generate a new keypair for the MessageSent event account.
    const messageSentEventAccountKeypair = Keypair.generate();

    console.log("\n\nCalling depositForBurn with parameters: ");
    console.log("amount:", amount.toString());
    console.log("destinationDomain:", destinationDomain);
    console.log("mintRecipient (hex):", process.env.MINT_RECIPIENT_HEX);
    console.log("mintRecipient (bytes52):", mintRecipient.toString());
    console.log(
        "remoteTokenMessenger (hexa):",
        solanaAddressToHex(pdas.remoteTokenMessengerKey.publicKey.toString())
    );
    console.log(
        "remoteTokenMessenger (bytes52):",
        pdas.remoteTokenMessengerKey.publicKey.toString()
    );
    console.log("burnToken:", usdcAddress.toString());
    console.log("\n\n");

    // Call depositForBurn
    const depositForBurnTx = await tokenMessengerMinterProgram.methods
        .depositForBurn({
            amount,
            destinationDomain,
            mintRecipient,
        })
        // eventAuthority and program accounts are implicitly added by Anchor
        .accounts({
            owner: provider.wallet.publicKey,
            eventRentPayer: provider.wallet.publicKey,
            senderAuthorityPda: pdas.authorityPda.publicKey,
            burnTokenAccount: userTokenAccount,
            messageTransmitter: pdas.messageTransmitterAccount.publicKey,
            tokenMessenger: pdas.tokenMessengerAccount.publicKey,
            remoteTokenMessenger: pdas.remoteTokenMessengerKey.publicKey,
            tokenMinter: pdas.tokenMinterAccount.publicKey,
            localToken: pdas.localToken.publicKey,
            burnTokenMint: usdcAddress,
            messageTransmitterProgram: messageTransmitterProgram.programId,
            tokenMessengerMinterProgram: tokenMessengerMinterProgram.programId,
            messageSentEventData: messageSentEventAccountKeypair.publicKey,
            tokenProgram: spl.TOKEN_PROGRAM_ID,
        })
        // messageSentEventAccountKeypair must be a signer so the MessageTransmitter program can take control of it and write to it.
        // provider.wallet is also an implicit signer
        .signers([messageSentEventAccountKeypair])
        .rpc();

    // Fetch message and attestation
    console.log("depositForBurn txHash:", depositForBurnTx);
    const response = await getMessages(depositForBurnTx);
    console.log("depositForBurn message information:", response.messages[0]);
    console.log(
        "message and attestation can be used to receive the message on destination chain with domain",
        destinationDomain
    );
    const { attestation: attestationHex, message: receiveTxMessage } =
        response.messages[0];

    // Using the message bytes and signature receive the funds on destination chain and address

    const web3 = new Web3(process.env.ARB_TESTNET_RPC as string);

    const ARB_MESSAGE_TRANSMITTER_CONTRACT_ADDRESS =
        "0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872";

    // Add Arbitrum private key used for signing transactions
    const arbSigner = web3.eth.accounts.privateKeyToAccount(
        process.env.ARB_PRIVATE_KEY as string
    );
    try {
        web3.eth.accounts.wallet.add(arbSigner);
    } catch (error) {
        console.log("error: ", error.message);
    }

    const arbMessageTransmitterContract = new web3.eth.Contract(
        messageTransmitterAbi,
        ARB_MESSAGE_TRANSMITTER_CONTRACT_ADDRESS,
        { from: arbSigner.address }
    );

    web3.setProvider(
        new Web3.providers.HttpProvider(process.env.ARB_TESTNET_RPC as string)
    ); // Connect web3 to ARB testnet
    const receiveTxGas = await arbMessageTransmitterContract.methods
        .receiveMessage(receiveTxMessage, attestationHex)
        .estimateGas();
    const receiveTx = await arbMessageTransmitterContract.methods
        .receiveMessage(receiveTxMessage, attestationHex)
        .send({ gas: receiveTxGas.toString() });
    const receiveTxReceipt = await waitForTransaction(
        web3,
        receiveTx.transactionHash
    );
    console.log("ReceiveTxReceipt: ", receiveTxReceipt);

    // Example of reclaiming the rent from the MessageSent event account:
    const reclaimEventAccountTx = await messageTransmitterProgram.methods
        .reclaimEventAccount({
            attestation: Buffer.from(attestationHex.replace("0x", ""), "hex"),
        })
        .accounts({
            payee: provider.wallet.publicKey,
            messageTransmitter: pdas.messageTransmitterAccount.publicKey,
            messageSentEventData: messageSentEventAccountKeypair.publicKey,
        })
        .rpc();
    console.log("\n\nreclaimEventAccount txHash: ", reclaimEventAccountTx);
    console.log(
        "Event account has been reclaimed and SOL paid for rent returned to payee."
    );
};

main();
