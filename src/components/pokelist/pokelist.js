import React from "react";
import Pokecard from "../pokecard/pokecard";
import "./pokelist.css";

const pokelist = () => {
  return (
    <div className="pokelist">
      <Pokecard name="Pikachu" />
      <Pokecard name="Bulbsaur" />
      <Pokecard name="Bikachu" />
      <Pokecard name="Pikachu" />
      <Pokecard name="Bikachu" />
    </div>
  );
};

export default pokelist;
