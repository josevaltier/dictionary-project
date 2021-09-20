import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <small>Listen to the pronunciation here</small>
      </a>
    </div>
  );
}
