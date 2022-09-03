

const ethers = require("ethers");

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS_1;
//const CONTRACT_ADDRESS_2 = process.env.CONTRACT_ADDRESS_2;
const CONTRACT_ABI = require("../artifacts/contracts/myToken.sol/IECToken.json");
//const CONTRACT_ABI = require("../artifacts/contracts/myNFT.sol/myNFT.json");


let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

async function approve(spender,amount) {
  let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);

  let signer = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI.abi, wallet);

  const Approve = await signer.approve(spender , amount);

  console.log("Tx is Successfull");
  console.log(Approve);
}

approve("0x13dfe444ec57e49eD86D3Af3B44e51DC8bbA454C" , 60);
//'0x160325C85aEFfaE6e4F9f139456Cf0B44bbfEB02'