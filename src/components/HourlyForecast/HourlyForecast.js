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
          setIsLoaded(false);
          setError(result.message);
        } else {
          setData(result);
          setShowHours({ start: 0, end: recordsPerPage });
          setIsLoaded(true);
        }
      })
      .catch((err) => {
        setError(`${err}`);
      });
  }, [city, recordsPerPage]);

  return (
    <div className={classes.container}>
      <h1>Hourly Forecast</h1>
      {error ? (
        <div className={classes.error}>
          <h3>{error}</h3>
        </div>
      ) : (
        <div className={classes.contentContainer}>
          {isLoaded ? (
            <>
              <HourCards
                setShowHours={setShowHours}
                recordsPerPage={recordsPerPage}
                results={data}
                showHours={showHours}
              />
              <LineChart results={data} showHours={showHours} />
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default HourlyForecast;
