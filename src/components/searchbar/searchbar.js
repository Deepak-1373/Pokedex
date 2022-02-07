import React from "react";
import "./searchbar.css";

function searchbar() {
  const selectedPokemon = true;

  return (
    <div className="searchbar-container">
      {selectedPokemon ? (
        <div>
          {/* add image here */}
          <p>Name: Pickachu</p>
          <p>Id: Random Id</p>
          <p>Height: Random</p>
          <p>Weight: Random</p>
          <p>Base exp: 100xp</p>
        </div>
      ) : (
        <h2>Welcome to Pokedex</h2>
      )}
    </div>
  );
}

export default searchbar;
