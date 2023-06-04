import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CarouselRightButton = ({ color }: any) => {
  return (
    <button>
      <div className="absolute inset-y-0 z-10 flex lg:w-[450px] md:w-[200px] w-16 lg:h-[700px] md:h-[450px] h-[380px] outline-none justify-end items-center right-0">
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`mr-6 lg:hidden md:hidden block ${
            String(color).toUpperCase() === "DARK" ? "text-black" : "text-white"
          }`}
        />
      </div>
    </button>
  );
};

export default CarouselRightButton;
