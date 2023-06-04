import FlipCard from "../../components/flipCard/flipCard";
import images from "../../components/utls/images";

const Dev = () => {
  // const open = useSelector((state: RootState) => state.modal.open);
  // console.log(open);
  return (
    <div>
      <div className="flex mt-12 space-x-24">
        <FlipCard
          rightToLeft={false}
          leftToRight={true}
          topToBottom={false}
          bottomToTop={false}
          componentFront={
            <img
              className="object-cover w-96 h-[500px] rounded-lg shadow-xl shadow-black/50 "
              src={images.mobileImg1}
            />
          }
          componentBack={
            <img
              className="object-cover w-80 h-[500px] rounded-xl"
              src={images.mobileImg2}
            />
          }
        />
        <FlipCard
          rightToLeft={false}
          leftToRight={false}
          topToBottom={false}
          bottomToTop={true}
          componentFront={
            <img
              className="object-cover w-96 h-[500px] rounded-lg shadow-xl shadow-black/50 "
              src={images.mobileImg1}
            />
          }
          componentBack={
            <img
              className="object-cover w-80 h-[500px] rounded-xl"
              src={images.mobileImg2}
            />
          }
        />
      </div>
    </div>
  );
};

export default Dev;
