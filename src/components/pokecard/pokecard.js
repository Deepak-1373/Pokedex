import React from "react";
import "./pokecard.css";

const pokecard = ({ key, name, spritesUrl }) => {
  console.log(spritesUrl);
  return (
    <div className="pokecard">
      <img className="pokecard-sprite" alt="pokemon" src={spritesUrl}></img>
      <p>{name}</p>
    </div>
  );
};

export default pokecard;
