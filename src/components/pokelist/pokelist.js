import React from "react";
import Pokecard from "../pokecard/pokecard";
import "./pokelist.css";

const pokelist = ({ allPokemons }) => {
  return (
    <div className="pokelist">
      {allPokemons.map(
        (pokemon) =>
          pokemon.name && (
            <Pokecard
              key={pokemon.id}
              name={pokemon.name}
              spritesUrl={pokemon.sprites.normal}
            />
          )
      )}
    </div>
  );
};

export default pokelist;
