import React, { useContext } from "react";
import "./pokecard.css";
import { myContext } from "../../context";

const Pokecard = ({ name, spritesUrl }) => {
  const { handleClick } = useContext(myContext);
  return (
    <div className="pokecard" onClick={() => handleClick(name)}>
      <img className="pokecard-sprite" alt="pokemon" src={spritesUrl}></img>
      <p>{name}</p>
    </div>
  );
};

export default Pokecard;
