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
    <div>
      {arrayChunk(Object.keys(data.directories), 5).map((row, i) => (
        <div key={i} className="md:grid-cols-5 md:grid">
          {row.map((col: string, i: number) => (
            <SubDirectory title={col} key={i} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Directory;
