import React from "react";
import LinkBtn from "../../buttons/linkBtn";

const CardOne = ({ color, message, title, image }: any) => {
  return (
    <div className="relative py-2">
      <img src={image} className="md:h-[580px] h-[300px]" />
      <h1
        className={`absolute text-4xl  top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-mt-10 -mt-2 ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h1>
      <p
        className={`absolute text-2xl  top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 md:mt-1 ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        {message}
      </p>
      <div className="absolute flex mt-16 space-x-6 -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/2 md:mt-10">
        <LinkBtn name="Learn More" />
        <LinkBtn name="Buy" />
      </div>
    </div>
  );
};

export default CardOne;
