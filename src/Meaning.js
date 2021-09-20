import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <section className="DefinitionExample">
              <h5 className="PartOfSpeech">{props.meaning.partOfSpeech}</h5>
              <p className="">
                <span className="Definition">Definition:</span>{" "}
                {definition.definition}
              </p>

              <em>
                <span className="Example">Example:</span>{" "}
                <span className="ExampleText">{definition.example}</span>
              </em>

              <br />
              <Synonyms synonyms={definition.synonyms} />
            </section>
          </div>
        );
      })}
    </div>
  );
}
