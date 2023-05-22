import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SubDirectory = ({ title }: any) => {
  const links = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & HOme",
    "AirTags",
    "Gift Cards",
  ];
  return (
    <div className="px-12 py-4 md:p-4">
      <h1 className="text-sm font-bold text-black">
        {title}{" "}
        <FontAwesomeIcon
          icon={faPlus}
          className="absolute visible right-16 md:hidden"
        />
      </h1>
      <hr className="visible md:hidden" />
      {links.map((link: string, id: number) => {
        return (
          <p className="hidden text-sm text-gray-700 text-start md:block">
            {link}
          </p>
        );
      })}
    </div>
  );
};

export default SubDirectory;
