import React from "react";
import images from "../../utls/images";
import style from "../../../style/style";
import LinkBtn from "../../buttons/linkBtn";

const MySupportCard1 = ({ title, description }: any) => {
  return (
    <div className="p-4 md:flex md:space-x-28 md:p-1">
      <div className="md:w-[500px] space-y-6 flex flex-col md:items-start justify-center items-center">
        <h1 className={style.txtBlack5xlSB}>{title}</h1>
        <p className={style.txtBlackXl}>{description}</p>
        <LinkBtn name="Learn More" />
      </div>
      <img
        src={images.support9}
        className="object-cover md:w-[500px] md:rounded-r-3xl rounded-b-3xl py-2"
      />
    </div>
  );
};

export default MySupportCard1;
