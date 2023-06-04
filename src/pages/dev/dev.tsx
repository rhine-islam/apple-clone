import FlipAnimation from "../../components/flipAnimation/flipAnimation";
import images from "../../components/utls/images";

const Dev = () => {
  // const open = useSelector((state: RootState) => state.modal.open);
  // console.log(open);
  return (
    <div>
      <div className="flex mt-12 space-x-24">
        <FlipAnimation
          rightToLeft={false}
          leftToRight={true}
          topToBottom={false}
          bottomToTop={false}
          componentFront={
            <img
              src={images.mobileImg1}
              alt="Something"
              className="w-[380px] h-[500px] rounded-2xl"
            />
          }
          componentBack={
            <img
              src={images.mobileImg3}
              alt="Something"
              className="w-[380px] h-[500px] "
            />
          }
        />
        <FlipAnimation
          rightToLeft={false}
          leftToRight={true}
          topToBottom={false}
          bottomToTop={false}
          componentFront={
            <img
              src={images.mobileImg1}
              alt="Something"
              className="w-[380px] h-[500px] rounded-2xl"
            />
          }
          componentBack={
            <img
              src={images.mobileImg3}
              alt="Something"
              className="w-[380px] h-[500px] "
            />
          }
        />
      </div>
    </div>
  );
};

export default Dev;
