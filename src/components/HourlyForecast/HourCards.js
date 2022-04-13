import React, { useRef, useEffect } from "react";
import classes from "./HourlyForecast.module.css";
import Carousel from "react-elastic-carousel";
import SearchInputs from "./SearchInputs";

const Card = ({ text }) => {
  return <div className={classes.card}>{text}</div>;
};

const HourCards = ({ results, setShowHours, recordsPerPage }) => {
  const breakPoints = [
    { width: 1, itemsToShow: recordsPerPage },
    { width: 550, itemsToShow: recordsPerPage },
    { width: 768, itemsToShow: recordsPerPage },
    { width: 1200, itemsToShow: recordsPerPage },
  ];

  const carouselRef = useRef(null);

  const onChangeItems = (pageIndex) => {
    let startIndex = pageIndex * recordsPerPage;
    let endIndex = startIndex + recordsPerPage;

    const updatedShowHours = {
      start: startIndex,
      end: endIndex,
    };

    setShowHours({ ...updatedShowHours });
  };

  const onSelectTime = () => {
    console.log(carouselRef);
  };

  return (
    <div className={classes.cardsContainer}>
      {/* <SearchInputs list={results.list} /> */}
      <Carousel
        ref={carouselRef}
        itemsToScroll={5}
        breakPoints={breakPoints}
        onChange={(_, pageIndex) => {
          onChangeItems(pageIndex);
        }}
      >
        {results.list.map((el, id) => (
          <Card text={id} />
        ))}
      </Carousel>
    </div>
  );
};

export default HourCards;
