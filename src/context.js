import { createContext, useEffect, useReducer } from "react";
import { pokemonData } from "./data/pokemonData";
import { reducer, initialState } from "./reducer";

export const myContext = createContext();

const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Input Change Function
  const handleInputChange = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = searchedPokemons.filter(({ name }) => {
      return name && name.toLowerCase().includes(value);
    });
    dispatch({
      type: "INPUT_CHANGE",
      payload: result,
    });
  };

  // On Click Function
  const handleClick = (pokemonName) => {
    // find the selectedPokemon from the searchedPokemon
    const result = allPokemons.find(({ name }) => {
      return name === pokemonName;
    });
    // update the state
    dispatch({
      type: "ON_CLICK",
      payload: result,
    });
  };

  useEffect(() => {
    const pokeData = pokemonData;
    dispatch({
      type: "SEARCHED_POKEMONS",
      payload: pokeData,
    });
  }, []);

  const { allPokemons, searchedPokemons, selectedPokemon } = state;

  return (
    <myContext.Provider
      value={{
        allPokemons,
        searchedPokemons,
        selectedPokemon,
        handleClick,
        handleInputChange,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default MyContextProvider;
