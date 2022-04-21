import React from "react";
import Map from "../Map";
import { getWeatherIcon } from "../../utils/customIcon";
import ToggleUnits from "../ToggleUnits/Toggle";

import classes from "./css/MainComponent.module.css";
import { tempConversion } from "../../utils/unitConversion";

const MainComponent = ({ results, currentUnit, setCurrentUnit }) => {
  return (
    <div className={classes.Results}>
      {results && (
        <>
          <div className={classes.headingContainer}>
            <h3 className={classes.heading}>
              {results.name}, {results.sys.country}
            </h3>
            <ToggleUnits currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} />
          </div>
          <div className={classes.temperatureComponent}>
            <div className={classes.iconContainer}>
              {getWeatherIcon(results.weather[0].main)}
              <h3>{tempConversion(currentUnit, results.main.temp)}</h3>
            </div>

            <div className={classes.descriptionContainer}>
              <div>
                <div className={classes.ranges}>
                  <div className={classes.range}>
                    <h4>Min</h4>
                    <p>{tempConversion(currentUnit, results.main.temp_min)}</p>
                  </div>
                  <div className={classes.range}>
                    <h4>Max</h4>
                    <p>{tempConversion(currentUnit, results.main.temp_max)}</p>
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
          <div className={classes.mapContainer}>
            <Map weather={results} />
          </div>
        </>
      )}
    </div>
  );
};

export default MainComponent;
