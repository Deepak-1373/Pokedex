import React from "react";
import "./pokecard.css";

const pokecard = ({ name }) => {
  return (
    <div className="pokecard">
      {/* Add image here */}
      {name}
    </div>
  );
};

export default pokecard;
