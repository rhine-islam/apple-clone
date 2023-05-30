import React, { ReactNode } from "react";

interface Props {
  title: string;
  content: string;
  image: string;
  color: string;
  bgColor: string;
  position: string;
  children: ReactNode;
}

const DevBanner = ({
  title,
  content,
  image,
  color,
  bgColor,
  position,
  children,
}: Props) => {
  return (
    <div className={`w-full ${bgColor} py-4 mt-2`}>
      <div className="flex flex-col items-center pt-12">
        {String(position).toUpperCase() === "TOP" ? (
          <div className="z-20 flex flex-col items-center px-6 space-y-2 md:space-y-3 md:px-3">
            <h1
              className={`lg:text-4xl font-bold md:text-3xl text-2xl  ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {title}
            </h1>
            <p
              className={`md:max-w-[780px] w-full lg:text-xl md:text-lg text-sm font-normal text-center  ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {content}
            </p>
          </div>
        ) : (
          <div className="z-20 flex flex-col items-center px-6 space-y-2 md:mt-44 md:space-y-3 md:px-3 mt-36">
            <h1
              className={`lg:text-4xl font-bold md:text-3xl text-2xl  ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {title}
            </h1>
            <p
              className={`md:max-w-[780px] w-full lg:text-xl md:text-lg text-sm font-normal text-center ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {content}
            </p>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default DevBanner;
