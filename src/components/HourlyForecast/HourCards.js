import React, { useRef, useEffect } from "react";
import classes from "./HourlyForecast.module.css";
import Carousel from "react-elastic-carousel";
import SearchInputs from "./SearchInputs";
import { getDayStr, getTimeStr } from "../../utils/hourlyForecast";

const Card = ({ day, time, temp }) => {
  return (
    <div className={classes.card}>
      <h1>{temp}</h1>
      <h1>{day}</h1>
      <p>{time}</p>
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
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HourCards;
