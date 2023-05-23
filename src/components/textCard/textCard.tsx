import React from "react";
import style from "../../style/style";
import data from "../../data/data";

const TextCard = () => {
  return (
    <div className="relative md:w-[977px] md:py-12 flex flex-col justify-center space-y-4 p-10 md:p-1">
      <p className={style.txtGrayXs}>{data.term[1]}</p>
      <p className={style.txtGrayXs}>{data.term[2]}</p>
      <p className={style.txtGrayXs}>{data.term[3]}</p>
      <p className={style.txtGrayXs}>{data.term[4]}</p>
      <p className={style.txtGrayXs}>{data.term[5]}</p>
      <p className={style.txtGrayXs}>{data.term[6]}</p>{" "}
      <p className={style.txtGrayXs}>{data.term[7]}</p>
      <hr />
    </div>
  );
};

export default TextCard;
