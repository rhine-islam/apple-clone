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
    slidesToShow: 3,
    speed: 1500,
    responsive: [
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
    <div className="py-2 md:w-[920px] lg:w-[2560px]">
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
  );
};

export default Carousel;
