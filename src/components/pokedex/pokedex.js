import React from "react";
import "./pokedex.css";
import Result from "../result/result";

const pokedex = () => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <p>List of Pokemons</p>
      </div>
      <div className="pokemon-search-result-container">
        <Result />
      </div>
    </div>
  );
};

export default pokedex;
