import { useEffect, useState } from "react";
import "./App.css";
import Pokedex from "./components/pokedex/pokedex";
import { pokemonData } from "./data/pokemonData";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  useEffect(() => {
    const pokeData = pokemonData;
    console.log({ ...JSON.parse(pokemonData[0].sprites) });
    setAllPokemons(pokeData);
  }, []);
  return (
    <div className="app">
      <h1>Pokedex</h1>
      <Pokedex allPokemons={allPokemons} />
    </div>
  );
};

export default App;
