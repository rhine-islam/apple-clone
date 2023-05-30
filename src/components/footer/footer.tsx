import React from "react";

const Footer = ({ color }: any) => {
  return (
    <div className="px-12 mb-8 md:px-8 lg:px-2">
      <hr className="hidden md:block" />
      <div className="grid items-center grid-rows-2 md:mt-3 md:flex md:justify-around">
        <p
          className={`text-xs text-gray-500 ${
            String(color).toUpperCase() === "DARK"
              ? "text-gray-600"
              : "text-gray-300"
          }`}
        >
          Copyright © 2023 Apple Inc. All rights reserved.
        </p>
        <div
          className={`grid grid-cols-4 py-1 text-center divide-x divide-gray-400 md:space-x-4 md:mx-28  ${
            String(color).toUpperCase() === "DARK"
              ? "text-gray-600"
              : "text-gray-300"
          }`}
        >
          <p className="text-xs "> Privacy Policy</p>
          <p className="text-xs "> Terms of Use </p>
          <p className="text-xs md:pl-3"> Sales and Refunds </p>
          <p className="text-xs "> Legal Site Map</p>
        </div>
        <p
          className={`text-xs ${
            String(color).toUpperCase() === "DARK"
              ? "text-gray-600"
              : "text-gray-300"
          }`}
        >
          United State
        </p>
      </div>
    </div>
  );
};

export default Footer;
