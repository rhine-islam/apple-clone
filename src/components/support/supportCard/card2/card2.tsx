import React from "react";
import style from "../../../../style/style";
import LinkBtn from "../../../buttons/linkBtn";
import images from "../../../utls/images";
import data from "../../../../data/data";

const Card2 = () => {
  return (
    <section className="flex flex-col items-center py-12 space-y-6">
      <h1 className={`${style.txtBlack5xlSB} text-center`}>
        {data.support?.[2].title}
      </h1>
      <p className={`${style.txtBlack} text-lg`}>
        {data.support?.[2].description}
      </p>
      <LinkBtn name=" Download" />
      <LinkBtn name=" Get to know the Apple Support app" />
      <img
        src={images.support14}
        className="object-cover px-12 md:px-2 rounded-3xl h-[180px]"
      />
    </section>
  );
};

export default Card2;
