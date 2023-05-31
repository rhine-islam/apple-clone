import images from "../../components/utls/images";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.css";

const Test = () => {
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

  return (
    <div>
      <div className="carousel__container lg:max-w-[2550px] md:max-w-full">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          totalSlides={imageSrc.length}
          visibleSlides={1}
          currentSlide={1}
          isPlaying={true}
          infinite={true}
          touchEnabled={true}
        >
          <ButtonBack className="absolute top-0 bottom-0 z-30 my-auto text-3xl">
            Back
          </ButtonBack>
          <ButtonNext className="absolute top-0 bottom-0 z-30 my-auto text-3xl text-white right-1/4">
            Next
          </ButtonNext>
          <Slider className="md:px-96 lg:px-[650px]">
            {imageSrc.map((image, id) => (
              <Slide
                index={id}
                classNameVisible="activeSlide"
                className="opacity-40"
              >
                <Image
                  src={image}
                  hasMasterSpinner={true}
                  className="max-h-[800px] object-cover"
                />
              </Slide>
            ))}
          </Slider>{" "}
          <DotGroup />
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Test;
