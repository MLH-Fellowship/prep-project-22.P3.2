import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { createGlobalState } from "react-hooks-global-state";
import "./App.css";
import logo from "./mlh-prep.png";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import Map from "./Map";
import Leaflet from "leaflet";
// import { Marker, Popup, useMap } from "react-leaflet";
require("dotenv").config();

const center = {
  lat: 51.505,
  lng: -0.09,
};

// let globalCity = new GlobalState(0);

function DraggableMarker(props) {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const [city, setCity] = useState(null);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          setCity("Delhi");
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable ? "Marker is draggable" : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function App(props) {
  // const [position, setPosition] = [51.505, -0.09];
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City");
  // const [city, setCity] = useState(city);
  const [results, setResults] = useState(null);

  useEffect(() => {
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
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
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
                <Map weather={results} />
              </>
            )}
          </div>
          {/* <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <LocationMarker /> 
            <DraggableMarker />
          </MapContainer> */}
        </div>
      </>
    );
  }
}

export default App;
