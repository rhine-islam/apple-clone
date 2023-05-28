import React from "react";
import LinkBtn from "../../buttons/linkBtn";

const Card = ({
  color,
  message,
  title,
  desktopImg,
  mobileImg,
  position,
  link,
}: any) => {
  return (
    <div className="relative flex justify-center">
      <div className="overflow-hidden cursor-pointer xl:max-w-[1262px] md:h-[624px] h-[500px] w-full select-none md:w-full">
        <img
          className="hidden object-cover object-center w-full h-full md:block"
          src={desktopImg}
          alt={desktopImg}
        />
        {mobileImg === undefined || !mobileImg ? (
          <img
            className="object-cover object-center w-full h-full"
            src={desktopImg}
            alt={desktopImg}
          />
        ) : (
          <img
            className="block object-cover object-center w-full h-full md:hidden"
            src={mobileImg}
            alt={mobileImg}
          />
        )}
        {String(position).toUpperCase() === "TOP" ? (
          <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center mt-8 space-y-1 select-none md:space-y-4">
            <p
              className={`font-sf lg:text-4xl md:text-3xl font-bold text-2xl text-center w-72 ${
                color === "white" ? "text-white" : "text-black"
              }`}
            >
              {title}
            </p>
            <p
              className={`font-sf md:text-2xl text-center text-xl w-72  ${
                color === "white" ? "text-white" : "text-black"
              }`}
            >
              {message}
            </p>
            <div className="flex space-x-4">
              <LinkBtn name={link} />
            </div>
          </div>
        ) : (
          <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center mb-8 space-y-1 select-none md:space-y-4">
            <p
              className={`font-sf lg:text-4xl md:text-3xl font-bold text-2xl text-center w-72 ${
                color === "white" ? "text-white" : "text-black"
              }`}
            >
              {title}
            </p>
            <p
              className={`font-sf md:text-2xl text-center text-xl w-72 ${
                color === "white" ? "text-white" : "text-black"
              }`}
            >
              {message}
            </p>
            <div className="flex space-x-4">
              <LinkBtn name={link} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
