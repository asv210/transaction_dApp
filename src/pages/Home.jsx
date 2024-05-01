import React, { useEffect, useState } from "react";
import HeaderTransaction from "../components/HeaderTransaction.jsx";
import TransactionCard from "../components/TransactionCard.jsx";
import { useInputForm } from "../context/InputForm.jsx";
import TransactionForm from "../components/TransactionForm.jsx";
import { useConnection } from "../context/ConnectionContext.jsx";
import walletConnectFcn from "../components/hedera/walletConnect.js";
import MyGroup from "../components/MyGroup.jsx";
import AddTransaction from "../components/hedera/AddTransaction.js";
import ShowTransaction from "../components/hedera/ShowTransaction.js";
import AddAdmin from "../components/hedera/AddAdmin.js";
import contractAddress from "../constant/Constant.js";
import toast from "react-hot-toast";
const Home = () => {
  const { transfer, setTransfer } = useInputForm();
  const [valid, setValid] = useState(true);
  const [admin, setAdmin] = useState("");
  const [transactions, setTransactions] = useState();
  const [state, setState] = useState(false);
  const {
    walletData,
    setWalletData,
    account,
    network,
    setAccount,
    setNetwork,
    setConnectLinkSt,
    connectLinkSt,
    setConnectTextSt,
    connectTextSt,
  } = useConnection();

  async function connectWallet() {
    if (account !== undefined) {
      setConnectTextSt(`🔌 Account ${account} already connected`);
    } else {
      const wData = await walletConnectFcn();

      let newAccount = wData[0];
      let newNetwork = wData[2];
      if (newAccount !== undefined) {
        setConnectTextSt(`🔌 Account ${newAccount} connected`);
        setConnectLinkSt(
          `https://hashscan.io/${newNetwork}/account/${newAccount}`
        );

        setWalletData(wData);
        setAccount(newAccount);
        setNetwork(newNetwork);
      }
    }
  }
  async function addAdmin(e) {
    e.preventDefault();
    if (admin === "") {
      alert("Please enter an admin address!");
      return;
    }

    const [txHash, status, error] = await AddAdmin(walletData, admin);

    if (txHash === undefined) {
      if (status === 0) {
        toast.error("you are not the authorize " + error);
      } else if (status === 2) {
        toast.error(error);
      }
    } else {
      toast.success("admin added successful");
    }
    setAdmin("");
  }

  async function addTransaction(e) {
    e.preventDefault();
    if (
      transfer.sender === "" ||
      transfer.receiver === "" ||
      transfer.amount === "" ||
      transfer.remark === "" ||
      transfer.transactionId === ""
    ) {
      toast.error("please fill all the fields");
      return;
    }
    const [txHashtrans, status, error] = await AddTransaction(
      walletData,
      transfer
    );
    if (txHashtrans === undefined && status === 0) {
      toast.error("you are not the authorize user " + error);
    } else {
      setState(true);
      toast.success("transaction added success");
    }
    setTransfer({
      sender: "",
      receiver: "",
      amount: "",
      remark: "",
      transactionId: "",
    });
  }

  async function showTransaction() {
    if (walletData) {
      const transaction = await ShowTransaction(walletData, contractAddress);
      if (transaction === false) {
        setValid(false);
      } else {
        if (transaction.length > 0) {
          setTransactions(transaction);
        }
      }
    } else {
      alert("Please connect wallet first.");
    }
  }

  useEffect(() => {
    showTransaction();
  }, [account, state]);

  return (
    <main className="min-w-screen sm:w-[100vw] sm:h-[100%] xl:h-full flex flex-col sm:align-middle">
      <section className="flex flex-wrap xl:flex-nowrap justify-around lg:h-[10vh] mt-0">
        <MyGroup
          fcn={connectWallet}
          buttonLabel={"Connect Wallet"}
          text={connectTextSt}
          link={connectLinkSt}
        />

        {
          <div className="flex items-center justify-center flex-wrap  sm:flex-nowrap lg:flex-row">
            <div className="items-center  py-3">
              <label
                htmlFor="admin"
                className="font-bold text-5xl sm:text-lg  px-2 2xl:text-4xl"
              >
                Admin address :{" "}
              </label>
              <input
                type="text"
                className="pl-5 py-5 text-3xl md:text-xl sm:pl-2 sm:py-1 sm:mr-4 font-semibold lg:text-lg rounded-lg shadow-md shadow-gray-400 2xl:text-4xl 2xl:mx-5"
                placeholder="Enter admin address"
                id="admin"
                onChange={(e) => setAdmin(e.target.value)}
                value={admin}
              />
            </div>
            <button
              type="submit"
              className="text-white  bg-black my-5 text-3xl sm:text-base 2xl:text-3xl"
              onClick={addAdmin}
            >
              Add admin
            </button>
          </div>
        }
      </section>

      <section className="flex w-full flex-wrap xl:flex-nowrap p-6 md:mt-[2rem] xl:mt-0  justify-center bg-white">
        <div className="flex flex-col  text-3xl  xl:w-1/4 sm:text-2xl md:text-lg xl:text-lg 2xl:text-4xl xl:h-[84vh] 2xl:h-[87vh] items-center px-16 bg-[#E3E1D9] rounded-2xl justify-center text-center ">
          <div className="">
            <form onSubmit={addTransaction}>
              <TransactionForm />
              <button
                className="text-white bg-black my-9 xl:my-3"
                type="submit"
              >
                Add Transaction
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center text-center  h-[240vh]  md:h-[30rem] mt-[2rem]  sm:w-full mx-5 xl:mt-0 xl:w-full   rounded-2xl xl:h-[84vh] 2xl:h-[87vh] bg-[#C7C8CC]">
          <h2 className="text-6xl sm:text-3xl 2xl:text-6xl  my-4 font-semibold ">
            <u>All the transactions :</u>
          </h2>
          <div className=" overflow-x-auto w-[60rem] sm:w-full">
            <div className="flex flex-col w-[2000px] h-[210vh] sm:w-[1300px] sm:h-[75vh] rounded-2xl mx-auto  overflow-x-scroll xl:w-11/12  bg-white  xl:h-[71vh] 2xl:h-[77vh] ">
              <HeaderTransaction />
              <div className="overflow-y-scroll ">
                {!valid ? (
                  <p className="font-bold pt-3 text-6xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl ">
                    you are not the authorize user
                  </p>
                ) : transactions ? (
                  transactions.map((transaction, index) => (
                    <TransactionCard key={index} item={transaction} index={index} />
                  ))
                ) : (
                  <p className="2xl:text-3xl">No Transaction History Yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
