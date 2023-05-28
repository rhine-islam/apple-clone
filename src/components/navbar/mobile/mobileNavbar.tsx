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

const MobileNavbar = ({ navColor }: any) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className={`w-full overscroll-auto  ${
        navColor === "dark" ? "bg-black" : style.navWhite
      } lg:hidden xl:hidden 2xl:hidden md:hidden ${
        navbar ? "opacity-100 h-screen " : "opacity-50"
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
              <MenuLink name="Store" navbar={navbar} color={navColor} />
              <MenuLink name="Mac" navbar={navbar} color={navColor} />
              <MenuLink name="iPad" navbar={navbar} color={navColor} />
              <MenuLink name="iPhone" navbar={navbar} color={navColor} />
              <MenuLink name="Watch" navbar={navbar} color={navColor} />
              <MenuLink name="AirPods" navbar={navbar} color={navColor} />
              <MenuLink name="TV & Home" navbar={navbar} color={navColor} />
              <MenuLink name="Entertainment" navbar={navbar} color={navColor} />
              <MenuLink name="Accessories" navbar={navbar} color={navColor} />

              <MenuLink name="Support" navbar={navbar} color={navColor} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
