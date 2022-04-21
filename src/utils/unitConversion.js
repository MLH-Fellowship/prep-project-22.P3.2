export const tempConversion = (currentUnit, temp) => {
  if (currentUnit === "kelvin") {
    temp = temp + 273.15;
    return (Math.round((temp + Number.EPSILON) * 100) / 100).toString() + " K";
  }
  if (currentUnit === "fahrenheit") {
    temp = temp * (9 / 5.0) + 32;
    return (Math.round((temp + Number.EPSILON) * 100) / 100).toString() + " °F";
  }
  if (currentUnit === "celsius") {
    return (Math.round((temp + Number.EPSILON) * 100) / 100).toString() + " °C";
  }
};

export const tempConversionNoUnit = (currentUnit, temp) => {
  if (currentUnit === "kelvin") {
    return temp + 273.15;
  }
  if (currentUnit === "fahrenheit") {
    return temp * (9 / 5.0) + 32;
  }
  if (currentUnit === "celsius") {
    return temp;
  }
};
