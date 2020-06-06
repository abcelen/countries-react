import React, { useState } from "react";
import Search from "./Search";
import RegionFilter from "./RegionFilter";
import data from "./countriesAll.json";

const CountryCard = () => {
  const [countries, setCountries] = useState(data);

  const filteredCountries = (value) => {
    setCountries(
      data.filter((country) => country.name.toLowerCase().includes(value))
    );
  };
  const handleSearch = (e) => {
    filteredCountries(e.target.value.toLowerCase());
  };

  const countriesFilteredByRegion = (value) => {
    setCountries(data.filter((country) => country.region === value));
  };
  const handleFilter = (e) => {
    countriesFilteredByRegion(e.target.value.toLowerCase());
  };

  return (
    <div>
      <div className="search">
        <Search handleChange={handleSearch} />
        <RegionFilter handleFilter={handleFilter} />
      </div>
      <div className="row">
        {countries.map((country, index) => (
          <div
            className="xl-col-3 lg-col-4 md-col-4 sm-col-6 col-12"
            key={index}
          >
            <a className="link" href="#">
              <div className="country--card ">
                <img className="img" src={country.flag} alt="flag" />
                <h3>{country.name}</h3>
                <p className="info">
                  <b>Population: </b>
                  {country.population}
                </p>
                <p className="info">
                  <b>Region: </b>
                  {country.region}
                </p>
                <p className="info">
                  <b>Capital: </b>
                  {country.capital}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
