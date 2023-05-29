import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import data from '../../../data/data';
import style from '../../../style/style';
import BarTwoIcon from '../../icons/barTwoIcon';
import DeveloperIcon from '../../icons/developerIcon';
import SearchIcon from '../../icons/searchIcon';

const DevNavbar = ({ navColor = "dark" }: any) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav
        className={`w-full  ${
          navColor === "dark"
            ? "bg-zinc-900/90 backdrop-blur-xl"
            : style.navWhite
        }   hidden lg:block z-50 fixed md:block`}
      >
        <ul className="flex items-center justify-center lg:space-x-20 md:space-x-8">
          <Link to="/developer">
            <DeveloperIcon color={navColor === "white" ? "dark" : "white"} />
          </Link>

          {data.devNavTitle.map((name: string, id: number) => {
            return (
              <li
                className={`font-normal ${
                  navColor === "dark" ? style.txtWhite : style.txtBlack
                }`}
                key={id}
              >
                {name === "Support" ? (
                  <Link to="/support">{name}</Link>
                ) : (
                  <Link to="#">{name}</Link>
                )}
              </li>
            );
          })}

          <SearchIcon color={navColor} />
        </ul>
      </nav>
      <nav
        className={`w-full ${
          navColor === "dark" ? "bg-black" : "bg-gray-100 shadow-lg"
        } lg:hidden xl:hidden 2xl:hidden md:hidden ${
          navbar
            ? "opacity-100 h-screen w-full fixed z-30 animate-flip-down animate-ease-out"
            : "opacity-70 "
        }`}
      >
        <div className="px-4">
          <div>
            <div className="flex justify-center">
              {navbar ? (
                <div onClick={() => setNavbar(!navbar)} className="">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className={`absolute w-5 h-5 top-4 left-4  ${
                      navColor === "dark" ? "text-white" : "text-black"
                    }`}
                  />
                </div>
              ) : (
                <div className="absolute top-3 left-4">
                  <div onClick={() => setNavbar(!navbar)}>
                    <BarTwoIcon color={navColor} />
                  </div>
                </div>
              )}
              <Link to="/developer">
                <DeveloperIcon
                  color={navColor === "white" ? "dark" : "white"}
                />
              </Link>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-12  animate-fade-down animate-duration-[400ms] animate-delay-[1ms] animate-normal ${
                navbar ? "block " : "hidden"
              }`}
            >
              <ul className="space-y-3 ">
                <div className="relative -mt-12">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={`absolute mt-3 ml-3  ${
                      navColor === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  <input
                    type="text"
                    className={`w-full h-9 px-8 border  rounded-lg  focus:outline-none hover:cursor-pointer text-base ${
                      navColor === "dark"
                        ? "bg-zinc-600/40 border-zinc-600/50"
                        : " bg-zinc-300 border-zinc-400/50"
                    }`}
                    name=""
                    placeholder="Search"
                  />
                </div>
                <hr
                  className={`w-screen -ml-4 border-gray-700 ${
                    navColor === "dark" ? "border-gray-700" : "border-gray-300"
                  }`}
                />
                {data.devNavTitle.map((name: string, id: number) => {
                  return (
                    <li
                      className={`font-normal ml-8 mr-8 ${
                        navColor === "dark" ? style.txtWhite : style.txtBlack
                      }`}
                      key={id}
                    >
                      {name === "Support" ? (
                        <Link to="/support">{name}</Link>
                      ) : (
                        <Link to="#">{name}</Link>
                      )}
                      <hr
                        className={`w-full pb-2 mt-2 border-gray-700 ${
                          navColor === "dark"
                            ? "border-gray-700"
                            : "border-gray-300"
                        }`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DevNavbar
