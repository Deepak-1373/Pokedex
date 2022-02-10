import React from "react";
import "./pokecard.css";

const pokecard = ({ allPokemons }) => {
  // console.log(allPokemons);
  // console.log(allPokemons[0].sprites["normal"]);
  return (
    <>
      {allPokemons.map(({ id, name, base_experience, sprites }) => (
        <div className="pokecard" key={id}>
          {/* <p>{sprites}</p> */}
          {/* <img src={JSON.parse(sprites.normal)}></img> */}
          <p>{name}</p>
          <p>{base_experience}</p>
        </div>
      ))}
    </>
  );
};

export default pokecard;
