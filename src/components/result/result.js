import React, { useContext } from "react";
import "./result.css";
import { myContext } from "../../context";

const result = () => {
  const { selectedPokemon } = useContext(myContext);
  const { name, id, height, weight, base_experience, sprites } =
    selectedPokemon || {};

  return (
    <div className="searchbar-result-container">
      {Object.keys(selectedPokemon).length > 0 ? (
        <div>
          <img
            alt={name}
            src={sprites?.animated || sprites?.normal}
            className="result-image"
          />
          <p>Name: {name}</p>
          <p>Id: {id}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Base exp: {base_experience}</p>
        </div>
      ) : (
        <h2>Welcome to Pokedex</h2>
      )}
    </div>
  );
};

export default result;
