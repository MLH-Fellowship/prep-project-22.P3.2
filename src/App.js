import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import ThingsToCarry from "./components/ThingsToCarry";
import SearchBar from "./components/SearchBar/SearchBar";
import { geolocation } from "./api/geolocation";
import logo from "./mlh-prep.png";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import Map from "./components/Map";
import Leaflet from "leaflet";
import dotenv from "dotenv";
import sunny from "./sunny.webp";
import MainComponent from "./components/MainComponent/MainComponent"

dotenv.config();

function App() {
  // const [position, setPosition] = [51.505, -0.09];
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
    document.body.style.backgroundImage = results
      ? `url(https://source.unsplash.com/1920x1080/?${results.weather[0].main})`
      : sunny;
  }, [results]);

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
          
          {/* shift from here */}
          <MainComponent isLoaded = {isLoaded} setCity = {setCity} results = {results}/>
          <HourlyForecast city={city} />
        </div>
        {results?.weather?.length && (
          <ThingsToCarry weatherType={results.weather[0].main} />
        )}
      </>
    );
  }
}

export default App;
