import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Map from "../Map";

function MainComponent({ setCity, isLoaded, results }) {
  return (
    <>
      <h2>Enter a city below 👇</h2>
      <SearchBar setCity={setCity} />
      {/* shift from here */}
      <div className="Results">
        {!isLoaded && <h2>Loading...</h2>}
        {console.log(results)}
        {isLoaded && results && (
          <>
            <h2>{results.weather[0].main}</h2>
            <h1>Feels like {results.main.feels_like}°C</h1>
            <i>
              <h2>
                {results.name}, {results.sys.country}
              </h2>
            </i>
            <Map weather={results} />
          </>
        )}
      </div>
    </>
  );
}

export default MainComponent;
