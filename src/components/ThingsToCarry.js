import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles/ThingsToCarry.css";

const ThingsToCarry = ({ weatherType }) => {
  return (
    <div className="center-content">
      <div className="carousel-container">
        <h2>Things to Carry</h2>
        <Carousel
          draggable={false}
          // partialVisible={true}
          itemClass="image-item"
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              // paritialVisibilityGutter: 60
            },
            tablet: {
              breakpoint: { max: 1024, min: 600 },
              items: 2,
              // paritialVisibilityGutter: 50
            },
            mobile: {
              breakpoint: { max: 600, min: 0 },
              items: 1,
              // paritialVisibilityGutter: 30
            },
          }}
        >
          {[
            "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          ].map((image) => {
            return <img style={{ width: "100%", height: "100%" }} src={image} alt="" />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ThingsToCarry;
