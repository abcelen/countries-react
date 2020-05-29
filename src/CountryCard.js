import React from "react";
import data from "./countriesAll.json";

const CountryCard = () => {
  return (
    <div className="row">
      {data.map((country, index) => (
        <div
          className="xl-col-3 lg-col-3 md-col-3 sm-col-12 col-12"
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
  );
};

export default CountryCard;
