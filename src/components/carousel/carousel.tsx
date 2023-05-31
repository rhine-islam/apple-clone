import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCard from "./imageCard";
import { createUseStyles } from "react-jss";
import images from "../utls/images";
const useStyles = createUseStyles({
  sliderContainer: {
    "& .slick-slide": {
      opacity: 0.6,
      width: "1200px",
    },
    "& .slick-center": {
      opacity: 1,
    },
  },
});

const Carousel = () => {
  const classes = useStyles();

  const imageSrc = [
    images.image1,
    images.image2,
    images.image3,
    images.image4,
    images.image5,
    images.image6,
    images.image7,
    images.image8,
    images.image9,
    images.image10,
    images.image11,
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 1500,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          adaptiveHeight: true,
          variableWidth: true,
          className: "slider variable-width",
          arrows: false,
          centerMode: true,
          centerPadding: "1px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          adaptiveHeight: true,
          variableWidth: true,
          className: "slider variable-width",
          arrows: false,
          centerMode: true,
          centerPadding: "1px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "1px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container lg:max-h-[700px] md:max-h-[400px] md:max-w-[1000px] lg:max-w-[2500px] h-full  w-full">
      <div className="w-full h-[1200px]">
        <Slider {...settings} className={classes.sliderContainer}>
          {imageSrc.map((image: string, id: number) => {
            return (
              <ImageCard
                message="Mystery Protect What You Have."
                image={image}
                color="white"
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
