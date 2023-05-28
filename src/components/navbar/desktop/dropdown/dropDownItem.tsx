import React from "react";
import style from "../../../../style/style";

const DropDownItem = ({ navColor, data, index }: any) => {
  return (
    <div className="flex flex-col ">
      {data.map((value: any, id: number) => {
        return (
          <a
            key={id}
            href="#"
            className={`animate-fade animate-ease-in ${
              navColor === "dark"
                ? index === 0
                  ? style.txtWhite2xlB
                  : style.txtWhiteSmL
                : index === 0
                ? style.txtBlack2xlB
                : style.txtBlackSmL
            }
            `}
          >
            {value}
          </a>
        );
      })}
    </div>
  );
};

export default DropDownItem;
