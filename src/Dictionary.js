import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for "${keyword}" definition`);
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
