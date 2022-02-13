import React, { useContext } from "react";
import Pokecard from "../pokecard/pokecard";
import "./pokelist.css";
import { myContext } from "../../context";

const Pokelist = () => {
  const { allPokemons } = useContext(myContext);
  return (
    <div className="pokelist">
      {allPokemons.map(
        ({ id, name, sprites }) =>
          name && <Pokecard key={id} name={name} spritesUrl={sprites.normal} />
      )}
    </div>
  );
};

export default Pokelist;
