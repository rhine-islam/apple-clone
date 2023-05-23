import React from "react";
import style from "../../../style/style";
import LinkBtn from "../../buttons/linkBtn";

const ServiceProgram = () => {
  return (
    <div className="flex flex-col items-start space-y-3">
      <h1 className={style.txtBlack2xlB}>Apple Service Programs</h1>
      <a href="#" className="text-blue-600">
        Apple Watch Series 6 Service Program for Blank Screen Issue
      </a>
      <a href="#" className="text-blue-600">
        iPhone 12 and iPhone 12 Pro Service Program for No Sound Issues
      </a>
      <a href="#" className="text-blue-600">
        iPhone 11 Display Module Replacement Program for Touch Issues
      </a>
      <a href="#" className="text-blue-600">
        15-inch MacBook Pro Battery Recall Program
      </a>
      <a href="#" className="text-blue-600">
        Apple Three-Prong AC Wall Plug Adapter Recall Program
      </a>
      <LinkBtn name="See all programs" />
    </div>
  );
};

export default ServiceProgram;
