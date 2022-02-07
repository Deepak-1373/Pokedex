import React from "react";
import Searchbar from "../searchbar/searchbar";
import "./pokedex.css";

function pokedex() {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <p>List of Pokemons</p>
      </div>
      <div className="pokemon-search-result-container">
        <p>Pokemon Search Results</p>
      </div>
    </div>
  );
}

export default pokedex;
