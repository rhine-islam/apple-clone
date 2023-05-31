import images from "../../components/utls/images";
import CarouselCard from "./carouselCard";

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
const mobImageSrc = [
  images.mobCarouselImg1,
  images.mobCarouselImg2,
  images.mobCarouselImg3,
  images.mobCarouselImg4,
  images.mobCarouselImg5,
  images.mobCarouselImg6,
  images.mobCarouselImg7,
  images.mobCarouselImg8,
  images.mobCarouselImg9,
  images.mobCarouselImg10,
  images.mobCarouselImg11,
];

const Dev = () => {
  return (
    <div className="max-w-[2200px] absolute left-0 right-0 m-auto">
      <div className="flex items-center justify-center">
        <div className="justify-center hidden py-3 md:flex md:max-w-full">
          <CarouselCard autoSlide={false} autoSlideDuration={4000}>
            {imageSrc.map((image: any, index: number) => (
              <img src={image} className="md:object-cover" />
            ))}
          </CarouselCard>
        </div>
        <div className="flex justify-center max-w-lg py-3 sm:max-w-2xl md:hidden">
          <CarouselCard autoSlide={false} autoSlideDuration={4000}>
            {mobImageSrc.map((image: any, index: number) => (
              <img src={image} className="object-cover h-[400px]" />
            ))}
          </CarouselCard>
        </div>
      </div>
    </div>
  );
};

export default Dev;
