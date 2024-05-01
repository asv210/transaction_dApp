import React from "react";

function MyButton(props) {
  return (
    <div className="">
      <button
        onClick={props.fcn}
        className="text-white text-2xl sm:text-base 2xl:text-3xl"
      >
        {props.buttonLabel}
      </button>
    </div>
  );
}
export default MyButton;
