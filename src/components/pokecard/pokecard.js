import React from "react";
import "./pokecard.css";

const pokecard = ({ name, spritesUrl, handleClick }) => {
  return (
    <div className="pokecard" onClick={() => handleClick(name)}>
      <img className="pokecard-sprite" alt="pokemon" src={spritesUrl}></img>
      <p>{name}</p>
    </div>
  );
};

export default pokecard;
