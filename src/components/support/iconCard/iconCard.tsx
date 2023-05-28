import React from "react";
import style from "../../../style/style";

const IconCard = ({ image, title }: any) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={image} className={`object-scale-down md:h-20 h-16`} />
      <p className={` ${style.txtBlack} text-center`}>{title}</p>
    </div>
  );
};

export default IconCard;
