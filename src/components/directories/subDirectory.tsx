import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import data from "../../data/data";
import style from "../../style/style";

const SubDirectory = ({ title }: any | string) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-12 py-4 md:px-1">
      <div className="">
        <h1 className={`text-black text-xs font-medium`}>{title} </h1>
        {open === true ? (
          <button
            className="absolute visible -mt-4 right-16 md:hidden"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} className="w-2 h-3" />
          </button>
        ) : (
          <button
            className="absolute visible -mt-4 right-16 md:hidden"
            onClick={() => setOpen(true)}
          >
            <FontAwesomeIcon icon={faPlus} className="w-2 h-3" />
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
                    className="text-xs text-gray-700 md:text-sm text-start font-sf"
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
