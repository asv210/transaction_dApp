import React, { useState } from "react";
import MyGroup from "./components/MyGroup.jsx";
import contractDeployFcn from "./components/hedera/contractDeploy.js";
import Home from "./pages/Home.jsx";
import { InputFormProvider } from "./context/InputForm.jsx";
import { useConnection } from "./context/ConnectionContext.jsx";
import { Toaster } from "react-hot-toast";
function App() {
  const { walletData, account, network, setContractAddress } = useConnection();
  const [contractTextSt, setContractTextSt] = useState();
  const [contractLinkSt, setContractLinkSt] = useState();

  let admin;

  async function contractDeploy() {
    if (account === undefined) {
      setContractTextSt("🛑 Connect a wallet first! 🛑");
    } else {
      const cAddress = await contractDeployFcn(walletData);

      if (cAddress === undefined) {
      } else {
        setContractAddress(cAddress);

        setContractTextSt(`Contract ${cAddress} deployed ✅`);
        setContractLinkSt(`https://hashscan.io/${network}/address/${cAddress}`);
      }
    }
  }

  return (
    <div className=" bg-red-500 m-0 p-0">
      <InputFormProvider>
        <Home />
        <Toaster />
        {/* <MyGroup
          fcn={contractDeploy}
          buttonLabel={"Deploy Contract"}
          text={contractTextSt}
          link={contractLinkSt}
        /> */}
      </InputFormProvider>
    </div>
  );
}
export default App;
