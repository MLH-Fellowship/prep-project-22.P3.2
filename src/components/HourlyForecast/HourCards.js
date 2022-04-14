import React, { useRef, useEffect } from "react";
import classes from "./HourlyForecast.module.css";
import Carousel from "react-elastic-carousel";
import SearchInputs from "./SearchInputs";
import { getDayStr, getTimeStr } from "../../utils/hourlyForecast";

const Card = ({ day, time, temp, icon }) => {
  return (
    <div className={classes.card}>
      <h2 style={{marginTop:"10px",marginBottom: "0"}}>{day}</h2>
        <h5 style={{margin: "8px"}}>{temp}</h5>
      <h5 style={{margin: "0"}}>{time}</h5>
      <img src = {`http://openweathermap.org/img/w/${icon}.png`} />

</div>
  );
};

const HourCards = ({ results, setShowHours, recordsPerPage }) => {
  const breakPoints = [
    { width: 1, itemsToShow: recordsPerPage },
    { width: 550, itemsToShow: recordsPerPage },
    { width: 768, itemsToShow: recordsPerPage },
    { width: 1200, itemsToShow: recordsPerPage },
  ];

  const carouselRef = useRef(null);

  const onChangeItems = (el) => {
    const { index: itemIndex } = el;
    let startIndex = itemIndex;
    let endIndex = startIndex + recordsPerPage;

    const updatedShowHours = {
      start: startIndex,
      end: endIndex,
    };

    setShowHours({ ...updatedShowHours });
  };

  const onSelectTime = (selectedTime) => {
    let elIndex = results.list.findIndex((el) => `${el.dt}` === selectedTime);
    carouselRef.current.goTo(Number(elIndex));
  };

  return (
    <div className={classes.cardsContainer}>
      <SearchInputs list={results.list} onSelectTime={onSelectTime} />
      <Carousel
        ref={carouselRef}
        itemsToScroll={recordsPerPage}
        breakPoints={breakPoints}
        onChange={(el) => {
          onChangeItems(el);
        }}
      >
        {results.list.map((el, id) => (
          <Card
            key={el.dt}
            day={getDayStr(el.dt)}
            time={getTimeStr(el.dt)}
            temp={el.main.temp}
            icon={el.weather[0].icon}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HourCards;
