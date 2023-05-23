import React from "react";
import style from "../../../style/style";
import { Link } from "react-router-dom";
import LinkBtn from "../../buttons/linkBtn";
import images from "../../utls/images";

const LatestUpdate = () => {
  return (
    <section className="flex flex-col items-center py-12 space-y-8">
      <h1 className={`${style.txtBlack5xlSB} text-center`}>Get the latest</h1>
      <p className={`${style.txtBlack} text-lg`}>
        Update your iPhone or iPad to the latest version of iOS or iPadOS.
      </p>
      <LinkBtn name="Learn How" />
      <img
        src={images.support11}
        className="object-cover md:w-[1000px] px-12 md:px-2"
      />
    </section>
  );
};

export default LatestUpdate;
