import React from "react";
import styles from "../App.css";

function Spinner(props) {
  return (
    <div className={`lds-ring ${props.className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export default Spinner;
