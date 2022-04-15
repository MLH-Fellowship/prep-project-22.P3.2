import thingsToCarryData from "../data/thingsToCarry.json";

export const getImagesOfThingsToCarry = (weatherType) => {
  if (weatherType === "Rain") {
    return [
      thingsToCarryData[0],
      thingsToCarryData[1],
      thingsToCarryData[2],
      thingsToCarryData[3],
      thingsToCarryData[4],
      thingsToCarryData[6],
    ];
  } else if (weatherType === "Clouds" || weatherType === "Drizzle") {
    return [
      thingsToCarryData[0],
      thingsToCarryData[6],
      thingsToCarryData[4],
      thingsToCarryData[3],
    ];
  } else if (weatherType === "Snow") {
    return [
      thingsToCarryData[16],
      thingsToCarryData[9],
      thingsToCarryData[15],
      thingsToCarryData[13],
      thingsToCarryData[8],
    ];
  } else if (weatherType === "Clear") {
    return [
      thingsToCarryData[14],
      thingsToCarryData[10],
      thingsToCarryData[7],
      thingsToCarryData[12],
      thingsToCarryData[11],
    ];
  } else if (
    weatherType === "Mist" ||
    weatherType === "Smoke" ||
    weatherType === "Haze" ||
    weatherType === "Fog" ||
    weatherType === "Dust" ||
    weatherType === "Ash"
  ) {
    return [thingsToCarryData[19], thingsToCarryData[6], thingsToCarryData[17]];
  } else if (
    weatherType === "Thunderstorm" ||
    weatherType === "Tornado" ||
    weatherType === "Squall"
  ) {
    return [thingsToCarryData[18], thingsToCarryData[17], thingsToCarryData[20]];
  } else {
    return [];
  }
};
