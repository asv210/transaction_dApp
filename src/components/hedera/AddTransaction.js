import abi from "../../contracts/abi.js";
import { ethers } from "ethers";

import contractAddress from "../../constant/Constant.js";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
async function AddTransaction(walletData, transfer) {
  const provider = walletData[1];
  const signer = provider.getSigner();

  const sender = transfer.sender;
  const receiver = transfer.receiver;
  const amount = transfer.amount;
  const remark = transfer.remark;
  const id = parseInt(transfer.transactionId);
  const gasLimit = 1000000;
  var txHash;
  var flag;
  var err;
  try {
    const myContract = new ethers.Contract(contractAddress, abi, signer);
    const result = await myContract.sendMoney(
      sender,
      receiver,
      amount,
      remark,
      id,
      {
        from: walletData[0],
        gasLimit: gasLimit,
      }
    );

    const receipt = await result.wait();
    delay(5000);
    txHash = result.hash;
    flag = receipt.status;
  } catch (error) {
    console.log(error);
    flag = await error.receipt.status;
    err = await error.code;
    console.log("error:", error);
  }
  delay(5000);

  return [txHash, flag, err];
}

export default AddTransaction;
