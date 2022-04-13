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
            `https://us1.locationiq.com/v1/reverse.php?key=pk.${process.env.REACT_APP_GEOLOCATION}8&lat=${response.latitude}&lon=${response.longitude}&format=json`
          );
          response.cityName = cityName.data.address.state_district;
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
