import React, { useEffect } from "react";
import Leaflet from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";

const LocationMarker = ({ weather, latLng }) => {
  //Changing Icons based on weather, There is a slight issue in popup positioning relative to the icon

  const image = new Leaflet.Icon({
    iconUrl: weather.weather
      ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      : "https://i.imgur.com/CVM0upn.png",
    shadowUrl: "https://i.imgur.com/DIpMMRb.png",
    iconSize: weather.weather ? [120, 120] : [25, 35], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [-10, 28], // the same for the shadow
    popupAnchor: weather.weather ? [26, -36] : [-6, -66], // point from which the popup should open relative to the iconAnchor
  });

  const map = useMap();
  useEffect(() => {
    map.flyTo(latLng, 10, {
      animate: true,
      duration: 3,
    });
    console.log("Fly !!!");
  }, [latLng]);

  return (
    <Marker position={latLng} icon={image}>
      <Popup>
        <p className="desc">
          {weather.weather
            ? `${weather.weather[0].description.toUpperCase()}`
            : `Mumbai, Latlng: ${latLng}`}
        </p>
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
