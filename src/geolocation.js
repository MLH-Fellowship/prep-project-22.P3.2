import Geolocation from "@react-native-community/geolocation";
import axios from "axios";

const getLocation = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      async (position) => {
        let response = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          err: null,
        };
        try {
          const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${response.latitude}&lon=${response.longitude}&appid=${process.env.REACT_APP_APIKEY}`
          );
          response.weatherResult = weatherResponse.data;
          response.cityName = weatherResponse.data.name;
          resolve(response);
        } catch (err) {
          reject(new Error(err.message));
        }
      },
      (error) => {
        reject(new Error(error.message));
      }
    );
  });
};

export const geolocationWeather = async () => {
  const response = await getLocation();
  return response;
};
