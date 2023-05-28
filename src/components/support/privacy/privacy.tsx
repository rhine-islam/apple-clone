import React from "react";
import style from "../../../style/style";
import LinkBtn from "../../buttons/linkBtn";
import images from "../../utls/images";
import data from "../../../data/data";

const Privacy = () => {
  return (
    <section className="flex flex-col items-center px-6 py-12 space-y-8 md:px-1">
      <h1 className={`${style.txtBlack5xlSB} text-center`}>
        {data.privacy?.title}
      </h1>
      <p className={`${style.txtBlack} text-lg`}>{data.privacy?.description}</p>
      <LinkBtn name="Learn How" />
      <img
        src={images.support12}
        className="object-cover md:w-[1000px] px-12 md:px-2 rounded-3xl"
      />
    </section>
  );
};

export default Privacy;
