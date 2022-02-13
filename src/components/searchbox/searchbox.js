import React, { useContext } from "react";
import "./searchbox.css";
import { myContext } from "../../context";

const Searchbox = () => {
  const { handleInputChange } = useContext(myContext);
  return (
    <div>
      <input
        onChange={(e) => handleInputChange(e)}
        className="searchbox"
        type="search"
        placeholder="Search Pokemons"
      ></input>
    </div>
  );
};

export default Searchbox;
