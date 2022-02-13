import React from "react";
import "./pokedex.css";
import Result from "../result/result";
import SearchBox from "../searchbox/searchbox";
import Pokelist from "../pokelist/pokelist";

const pokedex = () => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBox />
        <Pokelist />
      </div>
      <div className="pokemon-search-result-container">
        <Result />
      </div>
    </div>
  );
};

export default pokedex;
