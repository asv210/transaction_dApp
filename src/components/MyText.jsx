import React from "react";

function MyText(props) {
  if (props.link !== "") {
    return (
      <div className="flex items-center  max-w-screen-sm lg:pr-2 text-3xl sm:text-lg font-bold xl:text-lg 2xl:text-4xl">
        <a href={props.link} target={"_blank"} rel="noreferrer">
          <p className="sub-text">{props.text.substring(0, 25)}...</p>
        </a>
      </div>
    );
  } else {
    return (
      <div className="flex items-center max-w-screen-sm lg:pr-2 text-3xl sm:text-lg font-bold xl:text-2xl 2xl:text-4xl">
        <p className="sub-text">{props.text}</p>
      </div>
    );
  }
}

export default MyText;
