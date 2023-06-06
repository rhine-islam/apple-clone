import FlipAnimation from "../../components/flipAnimation/flipAnimation";
import ParallaxCard from "../../components/parallax";
import images from "../../components/utls/images";

const Dev = () => {
  // const open = useSelector((state: RootState) => state.modal.open);
  // console.log(open);
  return (
    <div className="flex flex-col items-center">
      <div className="flex p-8 space-x-12">
        <ParallaxCard
          imageOne={images.mobileImg1}
          imageTwo={images.mobileImg2}
          leftToRight={true}
        />
        <ParallaxCard
          duration={1.3}
          imageOne={images.mobileImg3}
          imageTwo={images.mobileImg4}
          leftToRight={true}
        />
      </div>
      <ParallaxCard
        imageOne={images.image1}
        imageTwo={images.image2}
        width={"full"}
        bottomToTop={true}
      />
      <div className="flex p-8 space-x-12">
        <ParallaxCard
          imageOne={images.mobileImg5}
          imageTwo={images.mobileImg6}
          leftToRight={true}
        />
        <ParallaxCard
          duration={1.3}
          imageOne={images.mobileImg1}
          imageTwo={images.mobileImg2}
          leftToRight={true}
        />
      </div>
      <ParallaxCard
        imageOne={images.image3}
        imageTwo={images.image4}
        width={"full"}
        bottomToTop={true}
      />
      <div className="flex p-8 space-x-12">
        <ParallaxCard
          imageOne={images.mobileImg3}
          imageTwo={images.mobileImg4}
          leftToRight={true}
        />
        <ParallaxCard
          duration={1.3}
          imageOne={images.mobileImg5}
          imageTwo={images.mobileImg6}
          leftToRight={true}
        />
      </div>
      <ParallaxCard
        imageOne={images.image3}
        imageTwo={images.image4}
        width={"full"}
        bottomToTop={true}
      />
      <div className="flex p-8 space-x-12">
        <ParallaxCard
          imageOne={images.mobileImg3}
          imageTwo={images.mobileImg4}
          leftToRight={true}
        />
        <ParallaxCard
          duration={1.3}
          imageOne={images.mobileImg5}
          imageTwo={images.mobileImg6}
          leftToRight={true}
        />
      </div>
    </div>
  );
};

export default Dev;
