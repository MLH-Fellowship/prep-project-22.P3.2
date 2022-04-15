import { useRef, useEffect, useState } from "react";
import "./App.css";
import ThingsToCarry from "./components/ThingsToCarry";
import SearchBar from "./components/SearchBar/SearchBar";
import logo from "./mlh-prep.png";
import dotenv from "dotenv";

dotenv.config();

import { geolocation } from "./api/geolocation";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [results, setResults] = useState(null);
  const firstUpdate = useRef(true);

  useEffect(() => {
    async function getLocation() {
      const locationResponse = await geolocation();
      if (locationResponse instanceof Error) {
        setError(locationResponse);
      } else {
        setCity(locationResponse.cityName);
      }
    }
    getLocation();
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result["cod"] !== 200) {
            setIsLoaded(false);
          } else {
            setIsLoaded(true);
            setResults(result);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [city]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        <img className="logo" src={logo} alt="MLH Prep Logo"></img>
        <div>
          <h2>Enter a city below 👇</h2>
          <SearchBar setCity={setCity} />
          <div className="Results">
            {!isLoaded && <h2>Loading...</h2>}
            {console.log(results)}
            {isLoaded && results && (
              <>
                <h3>{results.weather[0].main}</h3>
                <p>Feels like {results.main.feels_like}°C</p>
                <i>
                  <p>
                    {results.name}, {results.sys.country}
                  </p>
                </i>
              </>
            )}
          </div>
        </div>
        {results?.weather?.length && (
          <ThingsToCarry weatherType={results.weather[0].main} />
        )}
      </>
    );
  }
}

export default App;
