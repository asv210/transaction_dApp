import { createContext, useContext,useState } from "react"


const ConnectionContext=createContext();
export const ConnectionContextProvider=({children})=>{
    const [walletData, setWalletData] = useState();
    const [account, setAccount] = useState();
    const [network, setNetwork] = useState();
    const [contractAddress, setContractAddress] = useState();
    const [connectTextSt, setConnectTextSt] = useState("🔌 Connect here...");
    const [connectLinkSt, setConnectLinkSt] = useState("");
    return (
        <ConnectionContext.Provider value={{ walletData, account, network, contractAddress, connectTextSt ,setConnectTextSt,setAccount,setWalletData,setNetwork,setContractAddress,connectLinkSt,setConnectLinkSt}} >
            {children}
        </ConnectionContext.Provider>
    )
}
export const useConnection=()=>useContext(ConnectionContext);