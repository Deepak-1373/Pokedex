import React from "react";
import Pokecard from "../pokecard/pokecard";
import "./pokelist.css";

const pokelist = ({ allPokemons }) => {
  // console.log(allPokemons);
  return (
    <div className="pokelist">
      <Pokecard allPokemons={allPokemons} />
      {/* <Pokecard name="Bulbsaur" />
      <Pokecard name="Bikachu" />
      <Pokecard name="Pikachu" />
      <Pokecard name="Bikachu" /> */}
    </div>
  );
};

export default pokelist;
