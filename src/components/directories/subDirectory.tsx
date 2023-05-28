import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import data from "../../data/data";
import style from "../../style/style";

const SubDirectory = ({ title }: any | string) => {
  // Object.entries(data.test).map((value: any) => {
  //   value[0] === title ? console.log(value[1]) : null;
  // });
  return (
    <div className="px-12 py-4 md:px-1">
      <h1 className={style.txtBlackSmB}>{title} </h1>
      <FontAwesomeIcon
        icon={faPlus}
        className="absolute visible -mt-6 right-16 md:hidden"
      />
      <hr className="visible md:hidden" />

      <div className="">
        {Object.entries(data.directories).map((key: any, i: number) =>
          key[0] === title
            ? key[1].map((value: any, id: number) => {
                return (
                  <p
                    className="hidden text-sm text-gray-700 text-start md:block font-sf"
                    key={id}
                  >
                    {value}
                  </p>
                );
              })
            : null
        )}
      </div>
      {/* {data.subDirectories.map((link: string, id: number) => {
        return (
              <p
                className="hidden text-sm text-gray-700 text-start md:block"
                key={id}
              >
                {value[1]}
              </p>
            );
      })} */}
    </div>
  );
};

export default SubDirectory;
