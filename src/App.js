import { useEffect, useState } from "react";
import "./App.css";
import Pokedex from "./components/pokedex/pokedex";
import { pokemonData } from "./data/pokemonData";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  const handleInputChange = (value) => {
    setSearchField(value);
    const result = allPokemons.filter((pokemon) => {
      return (
        pokemon.name && pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setSearchedPokemons(result);
  };

  useEffect(() => {
    const pokeData = pokemonData;
    setAllPokemons(pokeData);
  }, []);
  return (
    <div className="app">
      <h1>Pokedex</h1>
      <Pokedex allPokemons={allPokemons} handleChange={handleInputChange} />
    </div>
  );
};

export default App;
