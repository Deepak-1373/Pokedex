import { useEffect, useState } from "react";
import "./App.css";
import Pokedex from "./components/pokedex/pokedex";

const App = () => {
  return (
    <div className="app">
      <h1>Pokedex</h1>
      <Pokedex />
    </div>
  );
};

export default App;
