import React from "react";

const RegionFilter = (props) => {
  return (
    <select
      className="select-region"
      value={props.handleFilter}
      onChange={props.handleFilter}
    >
      <option value="">Filter by Region</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  );
};

export default RegionFilter;
