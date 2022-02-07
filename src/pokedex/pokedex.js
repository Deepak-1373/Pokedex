import React from "react";
import "./pokedex.css";

function pokedex() {
  return (
    <div className="pokedex-container">
      <div className="pokedex-search-bar">
        <p>search Bar</p>
      </div>
      <div className="pokedex-list-container">
        <p>Pokemon list</p>
      </div>
      <div className="pokedex-display-container">
        <p>Pokemon display</p>
      </div>
    </div>
  );
}

export default pokedex;
