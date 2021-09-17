import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function searchWord(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    event.preventDefault();

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input
          type="search"
          placeholder="Search for..."
          autofocus="on"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
