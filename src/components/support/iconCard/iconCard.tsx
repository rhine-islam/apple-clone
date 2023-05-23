import React from "react";
import style from "../../../style/style";

const IconCard = ({ image, title, height, width }: any) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} className={`object-scale-down h-${height} w-${width}`} />
      <p className={` ${style.txtBlack} text-center`}>{title}</p>
    </div>
  );
};

export default IconCard;
