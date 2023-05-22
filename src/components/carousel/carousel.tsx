import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCard from "./imageCard";
import { createUseStyles } from "react-jss";

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
    "1250x703.jpg",
    "1250x703--0Ggdie.jpg",
    "1250x703--34nXUu.jpg",
    "1250x703--CewAWe.jpg",
    "1250x703--DjKX6r.jpg",
    "1250x703--FKjTnV.jpg",
    "1250x703--oe6qiL.jpg",
    "1250x703--pSYHXc.jpg",
    "1250x703--rdU3fH.jpg",
    "1250x703--SFTM2J.jpg",
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
              image={`./assets/images/banner/${image}`}
              color="white"
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
