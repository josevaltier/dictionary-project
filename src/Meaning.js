import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5 className="PartOfSpeech">{props.meaning.partOfSpeech}</h5>
      <br />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="Definition">{definition.definition}</p>

            <em>
              <span className="Example">Example:</span> {definition.example}
            </em>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
