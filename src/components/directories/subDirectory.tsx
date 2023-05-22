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
    <div className="p-4">
      <h1 className="text-sm font-bold text-black">{title}</h1>
      {links.map((link: string, id: number) => {
        return <p className="py-1 text-sm text-gray-700 text-start">{link}</p>;
      })}
    </div>
  );
};

export default SubDirectory;
