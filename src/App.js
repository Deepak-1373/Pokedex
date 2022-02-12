import { useEffect, useState } from "react";
import "./App.css";
import Pokedex from "./components/pokedex/pokedex";
import { pokemonData } from "./data/pokemonData";

const App = () => {
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState(searchedPokemons);
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    const result = [];
    result = searchedPokemons.filter(({ name }) => {
      return name && name.toLowerCase().includes(value);
    });
    setAllPokemons(result);
    console.log("handleInputChange", result);
  };

  const handleClick = (pokemonName) => {
    // find the selectedPokemon from the searchedPokemon
    const result = allPokemons.find((pokemon) => {
      return pokemon.name && pokemon.name === pokemonName;
    });
    setSelectedPokemon(result);
    console.log(result);

    // update the state
  };

  useEffect(() => {
    const pokeData = pokemonData;
    setSearchedPokemons(pokeData);
    setAllPokemons(pokeData);
  }, []);
  return (
    <div className="app">
      <h1>Pokedex</h1>
      <Pokedex
        allPokemons={allPokemons}
        pokemons={searchedPokemons}
        selectedPokemon={selectedPokemon}
        handleClick={handleClick}
        handleChange={handleInputChange}
      />
    </div>
  );
};

export default App;
