import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { cities } from "./data/cities";
import PropTypes from "prop-types";
import "./css/SearchBar.css";

const createCityObjects = (() => {
  // Array in which our city objects will be stored.
  let cityObjects = [];
  let index = 0;

  // Iterate through the cities array.
  // And create a new object for each city.
  // Each object has a name and a value.
  // The value is the city name.
  cities.forEach((city) => {
    cityObjects.push({
      id: index,
      name: city,
    });
    index++;
  });

  return cityObjects;
})();

const SearchBar = ({ setCity }) => {
  // Callback for when a city is selected.
  const handleOnSelect = (object) => {
    setCity(object.name);
  };

  return (
    <div className="search-bar">
      <ReactSearchAutocomplete
        fuseOptions={{
          keys: ["name"],
        }}
        resultStringKeyName="name"
        items={[...createCityObjects]}
        onSelect={handleOnSelect}
      />
    </div>
  );
};

SearchBar.propTypes = {
  setCity: PropTypes.func.isRequired,
};

export default SearchBar;
