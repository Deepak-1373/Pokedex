import { useState, createContext, useEffect } from "react";
import { pokemonData } from "./data/pokemonData";

export const myContext = createContext();

const MyContextProvider = ({ children }) => {
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
    <myContext.Provider
      value={{
        allPokemons,
        selectedPokemon,
        searchedPokemons,
        handleClick,
        handleInputChange,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default MyContextProvider;
