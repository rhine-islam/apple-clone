import React from "react";
import style from "../../style/style";
import data from "../../data/data";

const TextCard = () => {
  return (
    <div className="relative flex flex-col justify-center w-full p-10 space-y-4 md:w-full md:p-6 lg:w-[1100px] lg:p-14">
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
