import React from "react";
import style from "../../../../style/style";
import LinkBtn from "../../../buttons/linkBtn";
import images from "../../../utls/images";
import data from "../../../../data/data";

const Card1 = () => {
  return (
    <section className="flex flex-col items-center py-12 space-y-8">
      <h1 className={`${style.txtBlack5xlSB} text-center`}>
        {data.support?.[1].title}
      </h1>
      <p className={`${style.txtBlack} text-lg`}>
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
