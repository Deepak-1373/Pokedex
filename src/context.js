import { createContext, useEffect, useReducer } from "react";
import { pokemonData } from "./data/pokemonData";

const initialState = {
  searchedPokemons: [],
  allPokemons: [],
  selectedPokemon: {},
};

initialState.allPokemons = initialState.searchedPokemons;

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCHED_POKEMONS":
      return {
        ...state,
        searchedPokemons: action.payload,
        allPokemons: action.payload,
      };

    case "INPUT_CHANGE":
      return {
        ...state,
        allPokemons: action.payload,
      };

    case "ON_CLICK":
      return {
        ...state,
        selectedPokemon: action.payload,
      };

    default:
      return state;
  }
};
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
