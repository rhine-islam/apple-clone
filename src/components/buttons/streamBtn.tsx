import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StreamBtn = () => {
  return (
    <div>
      <button className="p-2 text-xs text-center text-black bg-white rounded-full md:text-lg md:pl-5 md:-mt-40 md:py-3 md:px-4">
        Stream Now
        <FontAwesomeIcon icon={faCirclePlay} className="px-2 -mt-1" />
      </button>
    </div>
  );
};

export default StreamBtn;
