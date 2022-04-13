import React, { useState } from "react";
import classes from "./HourlyForecast.module.css";

import { getDayStr, getTimeStr } from "../../utils/hourlyForecast";

const SearchInputs = ({ list }) => {
  const [timeOptions, setTimeOptions] = useState([]);

  const getTimeOptions = (selectedDay) => {
    let updatedTimeOptions = [];
    updatedTimeOptions = list.filter((el) => selectedDay === getDayStr(el.dt));
    let constructedTimeOptions = updatedTimeOptions.map((el) => {
      let timeStr = getTimeStr(el.dt);
      return { timeStr: timeStr, time: el.dt };
    });
    console.log(constructedTimeOptions);
    setTimeOptions([...constructedTimeOptions]);
  };

  return (
    <div className={classes.inputContainer}>
      <select onChange={(e) => getTimeOptions(e.target.value)}>
        {list.map((el) => {
          let day = getDayStr(el.dt);
          return <option value={day}>{day}</option>;
        })}
      </select>
      <select onChange={(e) => getTimeOptions(e.target.value)}>
        {timeOptions.map((el) => (
          <option value={el.time}>{el.timeStr}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchInputs;
