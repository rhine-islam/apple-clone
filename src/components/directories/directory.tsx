import React from "react";
import SubDirectory from "./subDirectory";
import data from "../../data/data";

const Directory = ({ color }: any) => {
  const arrayChunk = (arr: any, n: number) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  return (
    <div className="lg:grid-cols-2 md:gap-x-2 md:grid-flow-col-dense md:grid md:px-6 gap-x-1 md:grid-cols-6">
      {arrayChunk(Object.keys(data.directories), 2).map((row, i) => (
        <div key={i} className="md:flex md:flex-col">
          {row.map((col: string, i: number) => (
            <div className="">
              <SubDirectory title={col} key={i} color={color} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Directory;
