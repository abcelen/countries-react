import React from "react";
import "./App.css";
import "./grid.css";
import CountryCard from "./CountryCard";
import RegionFilter from "./RegionFilter";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="header-wraper">
          <Search />
          <RegionFilter />
        </div>
      </div>

      <div className="container">
        <CountryCard />
      </div>
    </div>
  );
}

export default App;
