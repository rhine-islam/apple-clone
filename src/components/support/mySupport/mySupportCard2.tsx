import React from "react";
import images from "../../utls/images";
import style from "../../../style/style";
import LinkBtn from "../../buttons/linkBtn";

const MySupportCard1 = ({ title, description }: any) => {
  return (
    <div className="p-4 md:flex md:space-x-8 md:p-1">
      <img
        src={images.support10}
        className="object-cover md:w-[500px] md:rounded-l-3xl rounded-b-3xl py-2 hidden md:block"
      />
      <div className="md:w-[500px] space-y-6 flex flex-col md:items-start justify-center items-center">
        <h1
          className={`text-black text-center font-semibold lg:text-5xl md:text-4xl text-3xl`}
        >
          {title}
        </h1>
        <p className={`${style.txtBlack} text-lg`}>{description}</p>
        <LinkBtn name="Learn More" />
      </div>
      <img
        src={images.support10}
        className="object-cover md:w-[500px] md:rounded-r-3xl rounded-b-3xl py-2 block md:hidden"
      />
    </div>
  );
};

export default MySupportCard1;
