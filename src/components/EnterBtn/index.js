import React from "react";
import "./style.css";

function EnterBtn(props) {
  return (
    <button onClick={props.onClick} className={`enterButton ${props["data-value"]}`} {...props} />
  );
}

export default EnterBtn;
