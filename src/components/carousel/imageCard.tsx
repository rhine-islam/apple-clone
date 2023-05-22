import React from "react";
import StreamBtn from "../buttons/streamBtn";

const ImageCard = ({ message, image, color }: any) => {
  return (
    <div className="relative px-1 md:px-2">
      <img src={image} className="md:h-full h-96" />
      <h2 className="absolute flex flex-col -ml-3 left-1/4 md:-translate-x-1/2 md:flex md:ml-6 md:left-0 bottom-4 animate-fade-up animate-delay-200 animate-ease-in">
        <StreamBtn />
        <p
          className={`absolute md:text-2xl md:-mt-1 md:w-96 md:right-72 text-center -mt-12 text-sm font-semibold md:font-normal  ${
            color === "white" ? "text-white" : "text-black"
          }`}
        >
          {message}
        </p>
      </h2>
    </div>
  );
};

export default ImageCard;
