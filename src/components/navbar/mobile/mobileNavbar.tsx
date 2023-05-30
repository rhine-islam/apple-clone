import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import BarTwoIcon from "../../icons/barTwoIcon";
import CrossIcon from "../../icons/crossIcon";
import MenuLink from "../../utls/menuLink";
import SearchIcon from "../../icons/searchIcon";
import CartIcon from "../../icons/cartIcon";
import style from "../../../style/style";
import { Link } from "react-router-dom";
import data from "../../../data/data";

const MobileNavbar = ({ navColor }: any) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className={`w-full ${
        navColor === "dark" ? "bg-neutral-900 " : "bg-gray-200"
      } lg:hidden xl:hidden 2xl:hidden md:hidden ${
        navbar
          ? "opacity-100 h-screen fixed z-30 animate-flip-down animate-ease-out"
          : "opacity-50 "
      }`}
    >
      <div className="px-4 mx-auto md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-1 md:py-2 md:block">
            {navbar ? null : (
              <Link to="/">
                <FontAwesomeIcon
                  icon={faAppleWhole}
                  className={`py-2 ${
                    navColor === "dark" ? style.txtWhite : style.txtBlack
                  }`}
                />
              </Link>
            )}
            {navbar ? (
              <div onClick={() => setNavbar(!navbar)}>
                <CrossIcon color={navColor} />
              </div>
            ) : (
              <div className="flex items-center space-x-6">
                <SearchIcon color={navColor} />
                <CartIcon color={navColor} />
                <div onClick={() => setNavbar(!navbar)}>
                  <BarTwoIcon color={navColor} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 animate-fade-down animate-duration-[400ms] animate-delay-[1ms] animate-normal ${
              navbar ? "block " : "hidden"
            }`}
          >
            <ul className="items-center justify-center pl-8 space-y-6 md:flex md:space-x-6 md:space-y-0">
              {Object.keys(data.navs).map((name: string, id: number) => (
                <MenuLink name={name} navbar={navbar} color={navColor} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
