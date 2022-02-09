import React from "react";
import "./pokecard.css";

const pokecard = ({ allPokemons }) => {
  console.log(allPokemons);
  return (
    <>
      {allPokemons.map((pokemon) => (
        <div className="pokecard">
          <p>{pokemon.name}</p>
          <p>{pokemon.base_experience}</p>
        </div>
      ))}
    </>
  );
};

export default pokecard;
