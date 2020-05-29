import React from "react";
import "./App.css";
import "./grid.css";
import CountryCard from "./CountryCard";
import RegionFIlter from "./RegionFilter";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search a country"
          />
          <RegionFIlter />
        </div>
      </div>

      <div className="container">
        <CountryCard />
      </div>
    </div>
  );
}

export default App;
