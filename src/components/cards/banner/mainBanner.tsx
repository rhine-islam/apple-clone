import React from "react";
import LinkBtn from "../../buttons/linkBtn";

const MainBanner = ({ color, message, title, image }: any) => {
  return (
    <div className="">
      <div
        className={`absolute flex flex-col justify-center items-center py-4 space-y-4 right-0 left-0 mt-6 ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        <h1 className={` md:text-5xl text-3xl font-bold text-center`}>
          {title}
        </h1>
        <h1 className={` md:text-3xl text-lg font-semibold text-center`}>
          {message}
        </h1>
        <div className="flex space-x-6">
          <LinkBtn name="Learn More" />
          <LinkBtn name="Buy" />
        </div>
      </div>
      <img
        src={image}
        alt="iphone"
        className="md:w-[2560px] h-[300px] w-[750px] md:h-[700px] right-0 left-0 mx-auto"
      />
    </div>
  );
};

export default MainBanner;
