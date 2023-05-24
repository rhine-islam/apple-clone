import React from "react";
import LinkBtn from "../../buttons/linkBtn";

const CardTwo = ({ color, message, title, image }: any) => {
  return (
    <div className="relative py-2">
      <img src={image} className="md:h-[580px] h-[700px] object-cover" />
      <h1
        className={`absolute text-4xl bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h1>
      <p
        className={`absolute text-2xl bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -mb-12 md:-mb-9 ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        {message}
      </p>
      <div className="absolute flex -mb-24 space-x-6 -translate-x-1/2 -translate-y-1/2 bottom-1/4 left-1/2 md:-mb-16">
        <LinkBtn name="Learn More" />
        <LinkBtn name="Buy" />
      </div>
    </div>
  );
};

export default CardTwo;
