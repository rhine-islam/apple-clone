import React from "react";
import style from "../../../style/style";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <section className="flex flex-col items-center py-12 space-y-12">
      <h1
        className={`text-black text-center font-semibold lg:text-5xl md:text-4xl text-3xl`}
      >
        Search for more topics
      </h1>
      <div>
        <div className="md:flex">
          <div className="p-3 ">
            <div className="relative">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute mt-5 ml-6 text-gray-400"
              />
              <input
                type="text"
                className="bg-white border rounded-lg  h-14 focus:outline-none focus:ring focus:ring-blue-300 hover:cursor-pointer xl:w-[1300px] lg:w-[1000px] px-12 md:w-[800px] w-[500px]"
                name=""
                placeholder="Search Support"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
