import Carousel, {
  Dots,
  arrowsPlugin,
  autoplayPlugin,
  slidesToScrollPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ImageCard from "./imageCard";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./css/carousel.css";
import data from "../../data/data";

const CarouselCard = ({ color }: any) => {
  const [value, setValue] = useState(0);
  const [pause, setPause] = useState(false);
  const onChange = (value: number) => {
    setValue(value);
  };

  return (
    <div className="lg:max-w-[2530px] relative md:w-full md:px-2">
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          "centered",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 1,
            },
          },
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button>
                  <FontAwesomeIcon
                    icon={faCircleChevronLeft}
                    className={`-mr-8 relative z-10  ${
                      String(color).toUpperCase() === "DARK"
                        ? "text-black"
                        : "text-white"
                    }`}
                  />
                </button>
              ),

              arrowRight: (
                <button>
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className={`-ml-8  relative  ${
                      String(color).toUpperCase() === "DARK"
                        ? "text-black"
                        : "text-white"
                    }`}
                  />
                </button>
              ),
              addArrowClickHandler: true,
            },
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 3000,
            },
          },
        ]}
        animationSpeed={1000}
        draggable={true}
      >
        {data.carousel.map((value: any) => (
          <ImageCard
            message={value.message}
            color={value.color}
            fullImage={value.fullImage}
            mobileImage={value.mobileImage}
          />
        ))}
      </Carousel>
      <Dots value={value} onChange={onChange} number={data.carousel.length} />
    </div>
  );
};

export default CarouselCard;
