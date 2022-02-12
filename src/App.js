import { useEffect, useState } from "react";
import "./App.css";
import Pokedex from "./components/pokedex/pokedex";
import { pokemonData } from "./data/pokemonData";

const App = () => {
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState(searchedPokemons);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  const handleInputChange = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = searchedPokemons.filter(({ name }) => {
      return name && name.toLowerCase().includes(value);
    });
    setAllPokemons(result);
  };

  const handleClick = (pokemonName) => {
    // find the selectedPokemon from the searchedPokemon
    const result = allPokemons.find(({ name }) => {
      return name === pokemonName;
    });

    // update the state
    setSelectedPokemon(result);
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
