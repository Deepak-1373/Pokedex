import { useEffect, useState } from "react";
import "./App.css";
import Pokedex from "./components/pokedex/pokedex";
import { pokemonData } from "./data/pokemonData";

const App = () => {
  const [appState, setState] = useState([
    {
      searchField: "",
      allPokemons: [],
      searchedPokemons: [],
      selectedPokemon: undefined,
    },
  ]);

  const [play, setPlay] = useState([
    {
      name: "Madhav",
    },
  ]);

  useEffect(() => {
    const pokeData = pokemonData;
    console.log(pokeData);
  }, []);
  return (
    <div className="app">
      <h1>Pokedex</h1>
      <Pokedex />
    </div>
  );
};

export default App;
