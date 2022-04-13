import React, { useState, useEffect } from "react";
import HourCards from "./HourCards";
import classes from "./HourlyForecast.module.css";
import LineChart from "./LineChart";

const HourlyForecast = ({ city }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);
  const [showHours, setShowHours] = useState({});
  let recordsPerPage = 5;

  useEffect(() => {
    setIsLoaded(false);
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric" +
        "&appid=" +
        process.env.REACT_APP_APIKEY
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.cod !== "200") {
          console.log(result);
          setIsLoaded(false);
          setError(result.message);
        } else {
          setData(result);
          setShowHours({ start: 0, end: recordsPerPage });
          setIsLoaded(true);
        }
        setData(result);
        setShowHours({ start: 0, end: recordsPerPage });
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(`${err}`);
      });
  }, [city]);

  const onShowNextItems = () => {
    const { start, end } = showHours;
    if (end < data.list?.length) {
      const updatedShowHours = {
        start: start + recordsPerPage,
        end: end + recordsPerPage,
      };
      setShowHours({ ...updatedShowHours });
    }
  };

  const onShowPrevItems = () => {
    const { start, end } = showHours;
    console.log(start, end);
    if (start > 0 && start !== 0) {
      const updatedShowHours = {
        start: start - recordsPerPage,
        end: end - recordsPerPage,
      };
      setShowHours({ ...updatedShowHours });
    }
  };

  return (
    <div className={classes.container}>
      <h1>Hourly Forecast</h1>
      {/* <button onClick={onShowNextItems}>Go Forward</button>
      <button onClick={onShowPrevItems}>Go Backwards</button> */}
      {error ? (
        <div className={classes.error}>
          <h3>{error}</h3>
        </div>
      ) : (
        <div className={classes.contentContainer}>
          {!isLoaded ? (
            <h3>Loading</h3>
          ) : (
            <>
              <HourCards />
              <LineChart results={data} showHours={showHours} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

//https://www.youtube.com/watch?v=eBKcGAhkZUI
export default HourlyForecast;
