export function getDayStr(time) {
  const weekDays = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };

  let forecastDate = new Date(time * 1000);
  return weekDays[forecastDate.getDay()];
}

export function getTimeStr(time) {
  let forecastDate = new Date(time * 1000);
  let hour = forecastDate.getHours();
  let ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  let timeStr = `${hour} ${ampm}`;
  return timeStr;
}
