import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import data from "../../data/data";
import style from "../../style/style";

const SubDirectory = ({ title, color }: any | string) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-12 py-4 md:px-1">
      <div className="">
        <h1
          className={` text-xs font-medium ${
            String(color).toUpperCase() === "DARK" ? "text-black" : "text-white"
          }`}
        >
          {title}{" "}
        </h1>
        {open === true ? (
          <button
            className="absolute visible -mt-4 right-16 md:hidden"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className={`w-2 h-3 ${
                String(color).toUpperCase() === "DARK"
                  ? "text-black"
                  : "text-white"
              }`}
            />
          </button>
        ) : (
          <button
            className="absolute visible -mt-4 right-16 md:hidden"
            onClick={() => setOpen(true)}
          >
            <FontAwesomeIcon
              icon={faPlus}
              className={`w-2 h-3 ${
                String(color).toUpperCase() === "DARK"
                  ? "text-black"
                  : "text-white"
              }`}
            />
          </button>
        )}

        <hr className="visible mt-3 md:hidden" />
      </div>

      <div
        className={`${
          open
            ? "visible space-y-4 ml-4 animate-flip-down animate-ease-out mt-3"
            : "hidden"
        } md:block`}
      >
        {Object.entries(data.directories).map((key: any, i: number) =>
          key[0] === title
            ? key[1].map((value: any, id: number) => {
                return (
                  <p
                    className={`text-xs  md:text-sm text-start font-sf ${
                      String(color).toUpperCase() === "DARK"
                        ? "text-gray-800"
                        : "text-gray-400"
                    }`}
                    key={id}
                  >
                    {value}
                  </p>
                );
              })
            : null
        )}
      </div>
    </div>
  );
};

export default SubDirectory;
