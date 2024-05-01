import abi from "../../contracts/abi.js";
import { ethers } from "ethers";


const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function getAdmins(walletData, contractAddress) {
  
  const provider = walletData[1];
  const signer = provider.getSigner();
  let admin;
  try {
    const gasLimit = 100000;
    const myContract = new ethers.Contract(contractAddress, abi, signer);
    const getAdminTx = await myContract.getAdmins({ gasLimit: gasLimit });
    admin = getAdminTx;
  } catch (executeError) {
    console.log(`- ${executeError.message.toString()}`);
  }
return admin

}

export default getAdmins;
