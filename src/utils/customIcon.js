import { Icon } from "@iconify/react";

export function getWeatherIcon(weatherType) {
  switch(weatherType){
    case "Clouds":
      return(<Icon icon="ic:round-cloud-queue" />)
    case "Sunny":
      return(<Icon icon="emojione:sun" />)
    case "Smoke":
      return(<Icon icon="wi:smoke" />)
    case "Haze":
      return(<Icon icon="bi:cloud-haze" />)
    case "Drizzle":
      return(<Icon icon="fluent:weather-drizzle-24-regular" />)
    case "Rain":
      return(<Icon icon="emojione:cloud-with-rain" />)
    case "Clear":
      return( <Icon icon="emojione:sun" />)
    case "Snow":
      return(<Icon icon="emojione-v1:cloud-with-snow" />)
     default:
      return(<Icon icon="emojione:sun" />)

     }
}
