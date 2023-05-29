import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LinkBtn = ({ name, link }: any) => {
  return (
    <a className="flex items-center text-blue-400" href={link}>
      <p className="text-sm xl:text-xl lg:text-lg md:text-base">{name}</p>
      <FontAwesomeIcon icon={faChevronRight} className="w-4 h-3 mt-1" />
    </a>
  );
};

export default LinkBtn;
