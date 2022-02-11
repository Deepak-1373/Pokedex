import React from "react";
import "./searchbox.css";

const searchbox = ({ handleChange }) => {
  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        className="searchbox"
        type="search"
        placeholder="Search Pokemons"
      ></input>
    </div>
  );
};

export default searchbox;
