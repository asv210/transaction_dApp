import React from "react";

const HeaderTransaction = () => {
  return (
    <div className="grid grid-cols-12 bg-slate-400 gap-2 border-2 text-4xl sm:text-lg lg:text-xl xl:text-xl p-1 2xl:text-4xl font-bold border-black rounded-lg m-2">
      <div className="col-span-1">No.</div>
      <div className="col-span-2">Transaction Id</div>
      <div className="col-span-2">Sender</div>
      <div className="col-span-2">Receiver</div>
      <div className="col-span-1">Amount</div>
      <div className="col-span-2">Remarks</div>
      <div className="col-span-2">Timing</div>
    </div>
  );
};

export default HeaderTransaction;
