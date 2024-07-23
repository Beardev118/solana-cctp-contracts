import dotenv from "dotenv";
import Web3 from "web3";
import fetch from "node-fetch";
import { AbiItem } from "web3-utils";
import { waitForTransaction } from "./utils";

dotenv.config();

const tokenMessengerAbi: AbiItem[] = require("./abis/cctp/TokenMessenger.json");
const usdcAbi: AbiItem[] = require("./abis/Usdc.json");
const messageTransmitterAbi: AbiItem[] = require("./abis/cctp/MessageTransmitter.json");

const main = async () => {
    const web3 = new Web3(process.env.ETH_TESTNET_RPC as string);

    // Add ETH private key used for signing transactions
    const ethSigner = web3.eth.accounts.privateKeyToAccount(
        process.env.ETH_PRIVATE_KEY as string
    );
    web3.eth.accounts.wallet.add(ethSigner);

    // Add Arbitrum private key used for signing transactions
    const arbSigner = web3.eth.accounts.privateKeyToAccount(
        process.env.ARB_PRIVATE_KEY as string
    );
    try {
        web3.eth.accounts.wallet.add(arbSigner);
    } catch (error) {
        console.log("error: ", error.message);
    }

    // Testnet Contract Addresses
    const ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS =
        "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5";
    const USDC_ETH_CONTRACT_ADDRESS =
        "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
    const ARB_MESSAGE_TRANSMITTER_CONTRACT_ADDRESS =
        "0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872";

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
    const arbMessageTransmitterContract = new web3.eth.Contract(
        messageTransmitterAbi,
        ARB_MESSAGE_TRANSMITTER_CONTRACT_ADDRESS,
        { from: arbSigner.address }
    );

    // ARB destination address
    const mintRecipient = process.env.RECIPIENT_ADDRESS as string;
    const destinationAddressInBytes32 = web3.utils.padLeft(mintRecipient, 64);
    const ARB_DESTINATION_DOMAIN = 3;

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
            ARB_DESTINATION_DOMAIN,
            destinationAddressInBytes32,
            USDC_ETH_CONTRACT_ADDRESS
        )
        .estimateGas();

    console.log("start: ", burnTxGas);

    const burnTx = await ethTokenMessengerContract.methods
        .depositForBurn(
            amount,
            ARB_DESTINATION_DOMAIN,
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

    // STEP 5: Using the message bytes and signature receive the funds on destination chain and address
    web3.setProvider(
        new Web3.providers.HttpProvider(process.env.ARB_TESTNET_RPC as string)
    ); // Connect web3 to ARB testnet
    const receiveTxGas = await arbMessageTransmitterContract.methods
        .receiveMessage(messageBytes, attestationSignature)
        .estimateGas();
    const receiveTx = await arbMessageTransmitterContract.methods
        .receiveMessage(messageBytes, attestationSignature)
        .send({ gas: receiveTxGas.toString() });
    const receiveTxReceipt = await waitForTransaction(
        web3,
        receiveTx.transactionHash
    );
    console.log("ReceiveTxReceipt: ", receiveTxReceipt);
};

main().catch(console.error);
