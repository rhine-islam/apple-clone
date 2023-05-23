import React from "react";
import style from "../../style/style";

const AppleIcon = ({ color }: any) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="14px"
      height="72px"
      viewBox="0 0 14 72"
      xmlSpace="preserve"
    >
      <defs>
        <symbol id="apple">
          <path d="M4.02,15.73c-0.25-0.16-0.51-0.39-0.77-0.71c-0.18-0.21-0.4-0.51-0.66-0.9c-0.45-0.65-0.82-1.4-1.1-2.25c-0.31-0.93-0.46-1.82-0.46-2.69c0-0.97,0.21-1.82,0.62-2.53C1.97,6.08,2.4,5.63,2.95,5.3C3.5,4.96,4.08,4.79,4.71,4.78c0.22,0,0.45,0.03,0.7,0.09C5.59,4.92,5.81,5,6.07,5.1c0.34,0.13,0.53,0.21,0.59,0.23c0.2,0.07,0.37,0.1,0.5,0.1c0.1,0,0.24-0.03,0.4-0.08c0.09-0.03,0.26-0.09,0.5-0.19C8.3,5.07,8.49,5,8.64,4.94c0.23-0.07,0.45-0.13,0.65-0.16C9.53,4.74,9.77,4.73,10,4.75c0.44,0.03,0.84,0.12,1.2,0.26c0.63,0.25,1.14,0.65,1.52,1.21c-0.16,0.1-0.31,0.21-0.45,0.34c-0.31,0.28-0.57,0.59-0.76,0.93c-0.27,0.48-0.4,1.01-0.4,1.56c0.01,0.67,0.18,1.26,0.52,1.77c0.24,0.37,0.56,0.69,0.95,0.95c0.19,0.13,0.36,0.22,0.52,0.28c-0.08,0.26-0.17,0.49-0.25,0.68c-0.22,0.52-0.48,0.99-0.77,1.43c-0.27,0.39-0.48,0.68-0.64,0.87c-0.25,0.3-0.49,0.52-0.73,0.68c-0.28,0.18-0.58,0.27-0.9,0.27c-0.22,0.01-0.43-0.02-0.64-0.08c-0.12-0.04-0.3-0.1-0.53-0.2c-0.23-0.1-0.42-0.17-0.56-0.21c-0.23-0.06-0.47-0.09-0.72-0.09c-0.25,0-0.49,0.03-0.72,0.09c-0.16,0.04-0.34,0.11-0.56,0.2c-0.26,0.11-0.43,0.18-0.53,0.21c-0.2,0.06-0.41,0.1-0.61,0.11C4.62,16.01,4.32,15.92,4.02,15.73z M8.26,4.31c-0.42,0.21-0.82,0.3-1.22,0.27c-0.06-0.4,0-0.81,0.17-1.26c0.15-0.38,0.35-0.73,0.62-1.04s0.6-0.57,1.01-0.78c0.41-0.21,0.8-0.32,1.17-0.34C10.06,1.58,10.01,2,9.86,2.44C9.72,2.84,9.51,3.2,9.24,3.53C8.97,3.86,8.64,4.12,8.26,4.31z" />
        </symbol>
      </defs>
      <use xlinkHref="#apple" x="0" y="0.5" fill="#555" />
      <use xlinkHref="#apple" x="0" y="18.5" fill="#333" />
      <use xlinkHref="#apple" x="0" y="36.5" fill="#515154" />
      <use xlinkHref="#apple" x="0" y="54.5" fill="#1d1d1f" />
    </svg>
  );
};

export default AppleIcon;
