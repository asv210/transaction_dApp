import abi from "../../contracts/abi.js";
import { ethers } from "ethers";
import contractAddress from "../../constant/Constant.js";
import toast from "react-hot-toast";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
async function AddAdmin(walletData, admin) {
  const provider = walletData[1];
  const signer = await provider.getSigner();

  var flag;
  var err;
  var txHash;
  try {
    const gasLimit = 100000;
    const myContract = new ethers.Contract(contractAddress, abi, signer);

    const result = await myContract.addAdmins(admin, {
      from: walletData[0],
      gasLimit: gasLimit,
    });
    const receipt = await result.wait();
    delay(5000);
    txHash = result.hash;
    flag = receipt.status;
  } catch (error) {
    console.log(error);
    if (error.receipt) {
      flag = await error.receipt.status;
      err = await error.code;
      console.log(err);
    } else {
      flag = 2;
      err = "given address is not address or something went wrong";
      return [txHash, flag, err];
    }
    console.log(error);
  }
  delay(5000);
  return [txHash, flag, err];
}

export default AddAdmin;
