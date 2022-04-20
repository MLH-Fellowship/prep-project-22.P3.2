import React from "react";
import Map from "../Map";
import { getWeatherIcon } from "../../utils/customIcon";
import { Icon } from "@iconify/react";

import classes from "./css/MainComponent.module.css";

const MainComponent = ({ isLoaded, results }) => {
  return (
    <div className={classes.Results}>
      {!isLoaded && <h2>Loading...</h2>}
      {isLoaded && results && (
        <>
          <h3 className={classes.heading}>
            {results.name}, {results.sys.country}
          </h3>
          <div className={classes.temperatureComponent}>
            <div className={classes.iconContainer}>
              {/* <Icon icon="fxemoji:whitesunsmallcloud" /> */}
              {getWeatherIcon(results.weather[0].main)}
              <h3>{results.main.temp} &#176;C</h3>
            </div>

            <div className={classes.descriptionContainer}>
              <div>
                <div className={classes.ranges}>
                  <div className={classes.range}>
                    <h4>Min</h4>
                    <p>{results.main.temp_min} &#176;C</p>
                  </div>
                  <div className={classes.range}>
                    <h4>Max</h4>
                    <p>{results.main.temp_max} &#176;C</p>
                  </div>
                </div>
                <p>
                  {results.weather[0].description} in {results.name} and temperature feels
                  like {results.main.feels_like}
                </p>
              </div>

              <div className={classes.detailsContainer}>
                <div className={classes.detail}>
                  <h5>Humidity</h5>
                  <p>{results.main.humidity} %</p>
                </div>
                <div className={classes.detail}>
                  <h5>Wind Speed</h5>
                  <p>{results.wind.speed} mt/s</p>
                </div>
                <div className={classes.detail}>
                  <h5>Pressure</h5>
                  <p>{results.main.pressure} hPa</p>
                </div>
              </div>
            </div>
          </div>
          <Map weather={results} />
        </>
      )}
    </div>
  );
};

export default MainComponent;
