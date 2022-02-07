import React from "react";
import SearchBar from "../searchbar/searchbar";
import "./pokedex.css";

function pokedex() {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <p>List of Pokemons</p>
      </div>
      <div className="pokemon-search-result-container">
        <SearchBar />
      </div>
    </div>
  );
}

export default pokedex;
