import abi from "../../contracts/abi.js";
import { ethers } from "ethers";
import getAdmins from "./getAdmins.js";

async function ShowTransaction(walletData, contractAddress) {
  const provider = walletData[1];
  const signer = provider.getSigner();
  const admins = await getAdmins(walletData, contractAddress);
if (admins.map((admin) => admin.toLowerCase()).includes(walletData[0].toLowerCase())){
  let transactions;
  try {
    const gasLimit = 1000000;
    const myContract = new ethers.Contract(contractAddress, abi, signer);
    const getAdminTx = await myContract.getAllTransactions({
      gasLimit: gasLimit,
    });
    transactions = getAdminTx;
  } catch (executeError) {
    console.log(`- ${executeError.message.toString()}`);
  }
  return transactions;
}else{
  return false;
}
}

export default ShowTransaction;
