export const initialState = {
  searchedPokemons: [],
  allPokemons: [],
  selectedPokemon: {},
};

initialState.allPokemons = initialState.searchedPokemons;

export const reducer = (state, action) => {
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
