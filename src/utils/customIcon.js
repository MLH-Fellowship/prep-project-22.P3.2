import { Icon } from "@iconify/react";

export function getWeatherIcon(weatherType) {
  switch (weatherType) {
    case "Clouds":
      return (
        <Icon style={{ color: "rgba(73, 169, 253, .5)" }} icon="ic:round-cloud-queue" />
      );
    case "Sunny":
      return <Icon icon="emojione:sun" />;
    case "Smoke":
      return <Icon style={{ color: "#868686" }} icon="wi:smoke" />;
    case "Haze":
      return <Icon style={{ color: "rgba(73, 169, 253, .5)" }} icon="bi:cloud-haze" />;
    case "Drizzle":
      return (
        <Icon
          style={{ color: "rgba(73, 169, 253, .5)" }}
          icon="fluent:weather-drizzle-24-regular"
        />
      );
    case "Rain":
      return <Icon icon="emojione:cloud-with-rain" />;
    case "Clear":
      return <Icon icon="emojione:sun" />;
    case "Snow":
      return <Icon icon="emojione-v1:cloud-with-snow" />;
    default:
      return <Icon icon="emojione:sun" />;
  }
}
