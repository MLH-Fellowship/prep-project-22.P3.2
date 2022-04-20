import React, { useState, useEffect } from "react";
import HourCards from "./HourCards";
import classes from "./css/HourlyForecast.module.css";
import LineChart from "./LineChart";
import { CircularProgress } from "@material-ui/core";

const HourlyForecast = ({ currentUnit, city }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);
  const [showHours, setShowHours] = useState({});
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  useEffect(() => {
    setIsLoaded(false);
    if (city) {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  //to change the records in carousel according to window width
  useEffect(() => {
    function handlePageChanged() {
      if (window.innerWidth < 900 && recordsPerPage !== 3) {
        setRecordsPerPage(3);
      } else if (window.innerWidth > 900 && recordsPerPage !== 5) {
        setRecordsPerPage(5);
      }
    }
    window.addEventListener("load", handlePageChanged);
    window.addEventListener("resize", handlePageChanged);
    return () => {
      window.removeEventListener("resize", handlePageChanged);
      window.removeEventListener("load", handlePageChanged);
    };
  });

  return (
    <div className={classes.container}>
      <h3>Hourly Forecast</h3>
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
                currentUnit={currentUnit}
              />
              <LineChart currentUnit={currentUnit} results={data} showHours={showHours} />
            </>
          ) : (
            <CircularProgress  />
          )}
        </div>
      )}
    </div>
  );
};

export default HourlyForecast;
