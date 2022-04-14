import React, { useState, useEffect } from "react";
import classes from "./HourlyForecast.module.css";

import { getDayStr, getTimeStr } from "../../utils/hourlyForecast";

const SearchInputs = ({ list, onSelectTime }) => {
  const [timeOptions, setTimeOptions] = useState([]);
  const [dayOptions, setDayOptions] = useState();

  useEffect(() => {
    let updatedOptions = {};
    list.map((el, i) => {
      updatedOptions[getDayStr(el.dt)] = i;
      return null;
    });
    setDayOptions(updatedOptions);
    getTimeOptions("Today");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  //this will run when user selects day
  const getTimeOptions = (selectedDay) => {
    let updatedTimeOptions = [];
    updatedTimeOptions = list.filter((el) => selectedDay === getDayStr(el.dt));
    let constructedTimeOptions = updatedTimeOptions.map((el) => {
      let timeStr = getTimeStr(el.dt);
      return { timeStr: timeStr, time: el.dt };
    });
    setTimeOptions([...constructedTimeOptions]);
  };

  const onTimeSelect = (selectedTime) => {
    onSelectTime(selectedTime);
  };

  return (
    <div className={classes.inputContainer}>
      <select onChange={(e) => getTimeOptions(e.target.value)}>
        {/* dayoptions are empty on first render */}
        {dayOptions &&
          Object.keys(dayOptions).map((el, i) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
      <select onChange={(e) => onTimeSelect(e.target.value)}>
        <option></option>
        {timeOptions.map((el) => (
          <option key={el.time} value={el.time}>
            {el.timeStr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchInputs;
