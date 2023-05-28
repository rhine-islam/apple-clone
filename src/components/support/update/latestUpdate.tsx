import React from "react";
import style from "../../../style/style";
import { Link } from "react-router-dom";
import LinkBtn from "../../buttons/linkBtn";
import images from "../../utls/images";
import data from "../../../data/data";

const LatestUpdate = () => {
  return (
    <section className="flex flex-col items-center px-6 py-12 space-y-8 md:px-1">
      <h1 className={`${style.txtBlack5xlSB} text-center`}>
        {data.update?.title}
      </h1>
      <p className={`${style.txtBlack} text-lg`}>{data.update?.description}</p>
      <LinkBtn name="Learn How" />
      <img
        src={images.support11}
        className="object-cover md:w-[1000px] px-12 md:px-2"
      />
    </section>
  );
};

export default LatestUpdate;
