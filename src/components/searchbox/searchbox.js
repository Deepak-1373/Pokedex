import React from "react";
import "./searchbox.css";

const searchbox = () => {
  return (
    <div>
      <input
        className="searchbox"
        type="search"
        placeholder="Search Pokemons"
      ></input>
    </div>
  );
};

export default searchbox;
