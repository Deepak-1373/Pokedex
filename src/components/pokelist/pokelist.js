import React from "react";
import Pokecard from "../pokecard/pokecard";
import "./pokelist.css";

const pokelist = ({ allPokemons }) => {
  return (
    <div className="pokelist">
      {allPokemons.map(
        ({ id, name, sprites }) =>
          name && <Pokecard key={id} name={name} spritesUrl={sprites.normal} />
      )}
    </div>
  );
};

export default pokelist;
