import React from "react";

const Footer = () => {
  return (
    <div className="px-12 mb-8 md:px-8 lg:px-2">
      <hr className="hidden md:block" />
      <div className="grid items-center grid-rows-2 md:mt-3 md:flex md:justify-around">
        <p className="text-xs text-gray-500">
          Copyright © 2023 Apple Inc. All rights reserved.
        </p>
        <div className="grid grid-cols-4 py-1 text-center divide-x divide-gray-400 md:space-x-4 md:mx-28">
          <p className="text-xs text-black"> Privacy Policy</p>
          <p className="text-xs text-black"> Terms of Use </p>
          <p className="text-xs text-black md:pl-3"> Sales and Refunds </p>
          <p className="text-xs text-black"> Legal Site Map</p>
        </div>
        <p className="text-xs text-gray-900">United State</p>
      </div>
    </div>
  );
};

export default Footer;
