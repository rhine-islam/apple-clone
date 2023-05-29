import React from "react";

const DevCard = ({
  title,
  content,
  image,
  color,
  bgColor,
  heading,
  position,
}: any) => {
  return (
    <div
      className={`w-full ${bgColor} ${
        heading === true
          ? "lg:h-[730px] md:h-[600px] h-[500px]"
          : "lg:h-[630px] md:h-[500px] h-[430px]"
      }`}
    >
      <div className="flex flex-col items-center pt-16">
        {String(position).toUpperCase() === "TOP" ? (
          <div className="z-20 flex flex-col items-center px-4 space-y-2 md:space-y-3 md:px-2">
            <h1
              className={`${
                heading === true
                  ? "lg:text-5xl font-bold md:text-4xl text-3xl"
                  : "lg:text-4xl font-bold md:text-3xl text-2xl"
              }  ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {title}
            </h1>
            <p
              className={`md:max-w-[480px] w-full ${
                heading === true
                  ? "lg:text-3xl md:text-2xl text-xl font-normal text-center"
                  : "lg:text-2xl md:text-xl text-lg font-normal text-center"
              }  ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {content}
            </p>
          </div>
        ) : (
          <div className="z-20 flex flex-col items-center space-y-2 lg:mt-[480px] md:mt-[380px] mt-80 md:space-y-3 md:px-2 px-4">
            <h1
              className={`${
                heading === true
                  ? "lg:text-5xl font-bold md:text-4xl text-3xl"
                  : "lg:text-4xl font-bold md:text-3xl text-2xl"
              }  ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {title}
            </h1>
            <p
              className={`md:max-w-[480px] w-full ${
                heading === true
                  ? "lg:text-3xl md:text-2xl text-xl font-normal text-center"
                  : "lg:text-2xl md:text-xl text-lg font-normal text-center"
              }  ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {content}
            </p>
          </div>
        )}
        <img
          className={`absolute z-0 ${
            heading === true
              ? "lg:max-h-[500px] lg:max-w-[550px] md:max-h-[400px] md:max-w-[450px] max-h-[300px] max-w-[350px]"
              : "lg:max-h-[380px] lg:max-w-[460px] md:max-h-[280px] md:max-w-[300px] max-h-[200px] max-w-[270px] lg:mt-32 md:mt-28 mt-24"
          }`}
          src={image}
          alt={image}
        />
      </div>
    </div>
  );
};

export default DevCard;
