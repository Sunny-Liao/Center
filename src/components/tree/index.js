import React from "react";
import "./style.css";

function tree(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
  }



export default tree;