import React, { useState } from "react";

const TransactionCard = (props) => {
  const [state, setState] = useState(false);
  return (
    <div
      key={props.index}
      className="grid grid-cols-12 my-10 shadow-md tracking-wide text-4xl sm:text-base font-bold 2xl:text-3xl 2xl:font-semibold hover:bg-slate-200 border p-4 sm:p-1 sm:font-extrabold border-gray-100 rounded-lg m-2"
    >
      <p className="col-span-1">{props.index + 1}</p>
      <p className="col-span-2 ">{props.item[5].toString()}</p>
      <p className="col-span-2 ">{props.item[0]}</p>
      <p className="col-span-2">{props.item[1]}</p>
      <p className="col-span-1 overflow-x-scroll">{props.item[2]}</p>
      <p className="col-span-2 p-1  will-change-scroll">{props.item[3]}</p>
      <p
        className="col-span-2 "
        onMouseMove={() => {
          setState(true);
        }}
        onMouseLeave={() => setState(false)}
      >
        {state
          ? new Date(parseInt(props.item[4]) * 1000).toUTCString()
          : new Date(parseInt(props.item[4]) * 1000)
              .toUTCString()
              .substring(0, 16)}
        ...
      </p>
    </div>
  );
};

export default TransactionCard;
