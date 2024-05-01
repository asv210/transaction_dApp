import abi from "../../contracts/abi.js";
import bytecode from "../../contracts/bytecode.js";
import { ContractFactory } from "ethers";

async function contractDeployFcn(walletData) {
  const provider = walletData[1];
  const signer = provider.getSigner();

  let contractAddress;
  try {
    const gasLimit = 400000;
    const myContract = new ContractFactory(abi, bytecode, signer);
    const admin = "0xd7A0F644102faDE38fd66c4B2447ea92e487FD2E";

    const contractDeployTx = await myContract.deploy(admin, {
      gasLimit: gasLimit,
    });

    const contractDeployRx = await contractDeployTx.deployTransaction.wait();
    contractAddress = contractDeployRx.contractAddress;
    console.log(`- Contract deployed to address: \n${contractAddress} ✅`);
  } catch (deployError) {
    console.log(`- ${deployError.message.toString()}`);
  }
  return contractAddress;
}
export default contractDeployFcn;
