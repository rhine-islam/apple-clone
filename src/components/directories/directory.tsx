import React from "react";
import SubDirectory from "./subDirectory";
import data from "../../data/data";

const Directory = () => {
  const arrayChunk = (arr: any, n: number) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };
  // console.log({ "⚒️": data.test });
  // for (const [key, value] of Object.entries(data.test)) {
  //   console.log(value);
  // }

  return (
    <div className="grid grid-flow-col-dense grid-cols-2 space-x-4">
      {arrayChunk(Object.keys(data.directories), 2).map((row, i) => (
        <div key={i} className="md:flex md:flex-col">
          {row.map((col: string, i: number) => (
            <div className="">
              <SubDirectory title={col} key={i} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Directory;
