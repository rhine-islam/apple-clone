import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CarouselLeftButton = ({ color }: any) => {
  return (
    <button>
      <div className="absolute inset-y-0 z-10 flex lg:w-[450px] md:w-[200px] w-16 lg:h-[700px] md:h-[450px] h-[380px] overflow-hidden outline-none   items-center">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`ml-6 lg:hidden md:hidden block${
            String(color).toUpperCase() === "DARK" ? "text-black" : "text-white"
          }`}
        />
      </div>
    </button>
  );
};

export default CarouselLeftButton;
