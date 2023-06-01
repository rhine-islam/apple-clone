import "./css/imageCard.css";
import StreamBtn from "../buttons/streamBtn";

const ImageCard = ({ message, fullImage, mobileImage, color }: any) => {
  return (
    <div className="relative">
      <img
        className="hidden object-cover md:w-full lg:h-[712px] md:h-[450px] md:block z-0"
        src={fullImage}
        alt={fullImage}
      />
      {mobileImage === undefined || !mobileImage || mobileImage === "" ? (
        <img
          className="block object-cover object-center  max-w-[700px] max-h-[500px] md:hidden z-0"
          src={fullImage}
          alt={fullImage}
        />
      ) : (
        <img
          className="block object-cover object-center w-[400px] h-[380px] md:hidden z-0"
          src={mobileImage}
          alt={mobileImage}
        />
      )}
      <div className="stream">
        <span className="absolute flex flex-col left-1/4 md:-translate-x-1/2 md:flex md:ml-6 md:left-0 bottom-4 animate-fade-up animate-delay-200 animate-ease-in">
          <StreamBtn />
          <p
            className={`absolute md:text-2xl md:-mt-1 md:w-96  -mt-12 text-sm font-semibold md:font-normal text-center md:text-right lg:ml-20 ${
              color === "white" ? "text-white" : "text-black"
            }`}
          >
            {message}
          </p>
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
