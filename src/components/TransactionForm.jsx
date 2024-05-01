import React from "react";
import { useInputForm } from "../context/InputForm";

const TransactionForm = () => {
  const { transfer, setTransfer } = useInputForm();
  return (
    <div>
      <h2 className="font-semibold py-5  md:text-3xl xl:text-3xl 2xl:text-6xl">
        <u>Transaction Form</u>
      </h2>
      <div className=" py-5 sm:py-3 2xl:py-7">
        <label htmlFor="id" className="font-semibold  px-2">
          Transaction Id :{" "}
        </label>
        <input
          type="number"
          className="pl-2 py-1 font-semibold text-md md:text-base  2xl:text-4xl rounded-lg shadow-md  shadow-gray-400"
          placeholder="Enter TransactionId"
          id="id"
          onChange={(e) =>
            setTransfer({ ...transfer, transactionId: e.target.value })
          }
          value={transfer.transactionId}
        />
      </div>
      <div className="py-10 sm:py-3 2xl:py-7">
        <label htmlFor="senderAddress" className="font-semibold py-5 px-2">
          sender address :{" "}
        </label>
        <input
          className="pl-2 py-1 font-semibold text-md md:text-base  2xl:text-4xl rounded-lg shadow-md shadow-gray-400"
          type="text"
          id="senderAddress"
          placeholder="Enter address of sender"
          onChange={(e) => setTransfer({ ...transfer, sender: e.target.value })}
          value={transfer.sender}
        />
      </div>
      <div className="py-10 sm:py-3 2xl:py-7">
        <label htmlFor="receiverAddress" className="font-semibold py-5 px-2">
          receiver address :{" "}
        </label>
        <input
          className="pl-2 py-1 font-semibold text-md md:text-base  2xl:text-4xl rounded-lg shadow-md shadow-gray-400"
          type="text"
          id="receiverAddress"
          placeholder="Enter address of receiver"
          onChange={(e) =>
            setTransfer({ ...transfer, receiver: e.target.value })
          }
          value={transfer.receiver}
        />
      </div>
      <div className="py-10 sm:py-3 2xl:py-7">
        <label htmlFor="amount" className="font-semibold py-5 px-2 2xl:mx-10">
          Amount :{" "}
        </label>
        <input
          type="text"
          className="pl-2 py-1 font-semibold text-md md:text-base  2xl:text-4xl rounded-lg shadow-md shadow-gray-400"
          id="amount"
          placeholder="Enter amount in ether"
          onChange={(e) => setTransfer({ ...transfer, amount: e.target.value })}
          value={transfer.amount}
        />
      </div>
      <div className="py-10 sm:py-3  2xl:py-7">
        <label htmlFor="remark" className="font-semibold py-5 px-2 2xl:mx-10">
          Remarks :{" "}
        </label>
        <input
          type="text"
          className="pl-2 py-1 font-semibold text-md md:text-base  2xl:text-4xl rounded-lg shadow-md shadow-gray-400"
          placeholder="Enter remarks"
          id="remark"
          onChange={(e) => setTransfer({ ...transfer, remark: e.target.value })}
          value={transfer.remark}
        />
      </div>
    </div>
  );
};

export default TransactionForm;
