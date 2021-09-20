import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("wanderlust");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function defaultSearch() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    defaultSearch();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    defaultSearch();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="IntroAndForm">
          <div className="Intro">What word do you want to search for?</div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for..."
              autoFocus="on"
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
