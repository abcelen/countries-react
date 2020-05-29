import React from "react";
import "./App.css";

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
        </div>
        <select className="region-filter"></select>
      </div>
      <div className="container">
        <div className="row">
          <div className="xl-col-3 lg-col-3 md-col-3 sm-col-12 col-12">
            <a className="link">
              <div className="country-card">
                <div className="flag-box">
                  <img src="" alt="" />
                </div>
                <div className="country-card-info">
                  <h1>Country</h1>
                  <h3>population</h3>
                  <p className="info">17000</p>
                  <h3>region</h3>
                  <p clclassNameass="info">17000</p>
                  <h3>capital</h3>
                  <p className="info">17000</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
