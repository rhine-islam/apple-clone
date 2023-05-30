import React, { ReactNode } from "react";
import LinkBtn from "../../buttons/linkBtn";

interface Props {
  title: string;
  content: string;
  color: string;
  children: ReactNode;
  link: string;
}
const MiniCard = ({ title, content, color, children, link }: Props) => {
  return (
    <div className="flex flex-col items-center py-2">
      {children}
      <p
        className={`font-semibold text-lg ${
          String(color).toUpperCase() === "WHITE" ? "text-white" : "text-black"
        }`}
      >
        {title}
      </p>
      <p
        className={`font-sm text-center w-48 ${
          String(color).toUpperCase() === "WHITE" ? "text-white" : "text-black"
        }`}
      >
        {content}
      </p>
      {link === undefined || link === "" ? null : <LinkBtn name={link} />}
    </div>
  );
};

export default MiniCard;
