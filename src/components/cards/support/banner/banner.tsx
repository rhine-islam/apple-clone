import React from "react";
import images from "../../../utls/images";

const Banner = ({ desktopImg, mobileImg }: any) => {
  return (
    <div className="relative flex justify-center ">
      <div className="overflow-hidden cursor-pointer  md:h-[700px] h-[500px] w-full select-none md:w-full lg:h-full">
        <img
          className="hidden object-cover object-center w-full h-full md:block"
          src={desktopImg}
          alt={desktopImg}
        />
        {mobileImg === undefined || !mobileImg ? (
          <img
            className="object-cover object-center w-full h-full md:h-[700px]"
            src={desktopImg}
            alt={desktopImg}
          />
        ) : (
          <img
            className="block object-cover object-center w-full h-full md:hidden"
            src={mobileImg}
            alt={mobileImg}
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
