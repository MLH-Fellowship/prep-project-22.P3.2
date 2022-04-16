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
          const cityName = await axios.get(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${response.latitude}&lon=${response.longitude}&limit=1&appid=${process.env.REACT_APP_APIKEY}`
          );
          response.cityName = cityName.data[0].name;
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

export const geolocation = async () => {
  const response = await getLocation();
  return response;
};
