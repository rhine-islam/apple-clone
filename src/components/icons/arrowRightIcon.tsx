import React from "react";
import style from "../../style/style";

const ArrowRightIcon = ({ color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${
        color === "dark" ? style.txtWhite : style.txtBlack
      }  mt-4 right-0 absolute animate-fade-right animate-duration-300 animate-delay-[1ms] animate-normal`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default ArrowRightIcon;
