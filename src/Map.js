import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents, MapConsumer } from "react-leaflet";
import L from "leaflet";
import icon from "./constants";
import LocationMarker from "./LocationMarker";

const Map = ({ weather }) => {
  const [latLng, setLatLng] = useState([19.0144, 72.8479]); // default location of map

  useEffect(() => {
    if (weather.coord) {
      const { lat, lon } = weather.coord;
      setLatLng([lat, lon]);
    }
  }, [weather]);

  return (
    <MapContainer center={latLng} zoom={9} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer>
        {(map) => {
          console.log("map center:", map.getCenter());
          map.on("click", function (e) {
            const { lat, lng } = e.latlng;
            L.marker([lat, lng], { icon }).addTo(map);
          });
          return null;
        }}
      </MapConsumer>
      <LocationMarker latLng={latLng} weather={weather} />
    </MapContainer>
  );
};

export default Map;
