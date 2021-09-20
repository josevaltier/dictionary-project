import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <section className="WordPhonetics">
          <h2 className="Word">{props.results.word}</h2>
          <div className="Phonetics">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </div>
        </section>
        <section className="MeaningSection">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
