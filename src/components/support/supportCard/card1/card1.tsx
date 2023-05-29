import React from "react";
import style from "../../../../style/style";
import LinkBtn from "../../../buttons/linkBtn";
import images from "../../../utls/images";
import data from "../../../../data/data";

const Card1 = () => {
  return (
    <section className="flex flex-col items-center py-12 space-y-8">
      <h1
        className={`text-black text-center font-semibold lg:text-5xl md:text-4xl text-3xl`}
      >
        {data.support?.[1].title}
      </h1>
      <p className={`${style.txtBlack} text-lg md:px-8 lg:px-3 px-10`}>
        {data.support?.[1].description}
      </p>
      <button className={`w-32 h-10 bg-black rounded-full ${style.txtWhite}`}>
        Start Now
      </button>
      <img
        src={images.support13}
        className="object-cover md:w-[1000px] px-12 md:px-2 "
      />
    </section>
  );
};

export default Card1;
