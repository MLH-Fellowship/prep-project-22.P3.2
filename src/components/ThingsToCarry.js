import Carousel from "react-multi-carousel";
import { getImagesOfThingsToCarry } from "../utils/thingsToCarry";
import "react-multi-carousel/lib/styles.css";
import "./styles/ThingsToCarry.css";

const ThingsToCarry = ({ weatherType }) => {
  const imagesOfThingsToCarry = getImagesOfThingsToCarry(weatherType);

  if (imagesOfThingsToCarry.length) {
    return (
      <div className="center-content">
        <div className="carousel-container">
          <h2>Things to Carry</h2>
          <Carousel
            draggable={false}
            itemClass="image-item"
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1100 },
                items: 3,
              },
              tablet: {
                breakpoint: { max: 1100, min: 500 },
                items: 2,
              },
              mobile: {
                breakpoint: { max: 500, min: 0 },
                items: 1,
              },
            }}
          >
            {imagesOfThingsToCarry.map((image) => {
              return (
                <div key={image.path} className="things-to-carry-container">
                  <img
                    src={image.path}
                    alt={image.name}
                    className="things-to-carry-image"
                  />
                  <p>{image.name}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
  return null;
};

export default ThingsToCarry;
