import React from "react";
import { MapContainer, TileLayer, MapConsumer } from "react-leaflet";
import Leaflet from "leaflet";
import icon from "../utils/constants";
import LocationMarker from "./LocationMarker";
require("dotenv").config();

var popup = Leaflet.popup();

// function onMapClick(e) {}

const Map = ({ weather }) => {
  const [latLng, setLatLng] = useState([19.0144, 72.8479]); // default location of map

  useEffect(() => {
    if (weather.coord) {
      const { lat, lon } = weather.coord;
      setLatLng([lat, lon]);
    }
  }, [weather]);

  return (
    <MapContainer
      center={latLng}
      zoom={9}
      scrollWheelZoom={false}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer>
        {(map) => {
          console.log("map center:", map.getCenter());
          {
            map.on("click", function (e) {
              const { lat, lng } = e.latlng;
              L.marker([lat, lng], { icon }).addTo(map);
              popup.setLatLng(e.latlng).setContent("Fetching weather info").openOn(map);

              fetch(
                "https://api.openweathermap.org/data/2.5/weather?lat=" +
                  e.latlng.lat +
                  "&lon=" +
                  e.latlng.lng +
                  "&appid=" +
                  process.env.REACT_APP_APIKEY
              )
                .then((r) => r.json())
                .then((data) => {
                  // Change this line to show exactly the info you need

                  popup.setContent(
                    data.weather.map((w) => w.description).join(", ") +
                      " " +
                      data.main.temp +
                      "°C"
                  );
                });
            });
          }
          return null;
        }}
      </MapConsumer>
      <LocationMarker latLng={latLng} weather={weather} />
    </MapContainer>
  );
};

export default Map;
