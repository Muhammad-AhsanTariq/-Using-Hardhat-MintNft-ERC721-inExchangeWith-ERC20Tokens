

const ethers = require("ethers");
const { inherits } = require("util");

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
//const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS_1;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS_2;
//const CONTRACT_ABI = require("../artifacts/contracts/myToken.sol/IECToken.json");
const CONTRACT_ABI = require("../artifacts/contracts/myNFT.sol/MyNFT.json");


let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

async function main() {
 let contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI.abi,
        customHttpProvider
      );
  let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);

  let signer = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI.abi, wallet);

  const Mint = await signer.safeMint();

  console.log("Tx is Successfull");
  console.log(Mint);

  const getbalance = await contract.balanceOf("0x968975c8B97B84D3f363d06ce43a6b3FFBD80536");

  console.log("Tx is Successfull");
  console.log(`mintBalance: ${getbalance.toString()}`);

  const Ownerbalance = await contract.ownerBalance();

  console.log("Tx is Successfull");
  console.log (`ownerBalance:${Ownerbalance.toString()}`);

 
 
}

main();