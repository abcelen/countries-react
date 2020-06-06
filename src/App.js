import React from "react";
import "./App.css";
import "./grid.css";
import CountryCard from "./CountryCard";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <CountryCard />
      </div>
    </div>
  );
}

export default App;
