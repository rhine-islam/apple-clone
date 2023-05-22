import React from "react";
import SubDirectory from "./subDirectory";

const Directory = () => {
  const arrayChunk = (arr: any, n: number) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  const titles = [
    "Shop and Learn",
    "Account",
    "Apple Store",
    "For Business",
    "Apple Values",
    "Entertainment",
    "For Education",
    "Apple Wallet",
    "For Healthcare",
    "About Apple",
    "For Government",
  ];

  return (
    <div>
      {arrayChunk(titles, 5).map((row, i) => (
        <div key={i} className="md:grid-cols-5 md:grid gap-x-20">
          {row.map((col: string, i: number) => (
            <SubDirectory title={col} key={i} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Directory;
