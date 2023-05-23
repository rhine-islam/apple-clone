import React from "react";

const Footer = () => {
  return (
    <div className="mb-8 px-12 md:px-2">
      <hr />
      <div className="flex items-center flex-col ">
        <p className="text-xs text-gray-500">
          Copyright © 2023 Apple Inc. All rights reserved.
        </p>
        <div className="grid items-center justify-center grid-cols-4 space-x-4 divide-x divide-gray-400">
          <p className="text-xs text-center text-black"> Privacy Policy</p>
          <p className="text-xs text-center text-black"> Terms of Use </p>
          <p className="text-xs text-center text-black"> Sales and Refunds </p>
          <p className="text-xs text-center text-black"> Legal Site Map</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
