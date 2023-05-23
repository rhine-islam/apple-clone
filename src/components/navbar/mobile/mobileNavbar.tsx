import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import BarTwoIcon from "../../icons/barTwoIcon";
import CrossIcon from "../../icons/crossIcon";
import MenuLink from "../../utls/menuLink";
import SearchIcon from "../../icons/searchIcon";
import CartIcon from "../../icons/cartIcon";
import style from "../../../style/style";
const MobileNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className={`w-full  bg-neutral-900 shadow lg:hidden xl:hidden 2xl:hidden md:hidden ${
        navbar ? "opacity-100 h-screen" : "opacity-50"
      }`}
    >
      <div className="px-4 mx-auto md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-2 md:block">
            {navbar ? null : (
              <FontAwesomeIcon
                icon={faAppleWhole}
                className={`py-2 ${style.txtWhite}`}
              />
            )}
            {navbar ? (
              <div onClick={() => setNavbar(!navbar)}>
                <CrossIcon />
              </div>
            ) : (
              <div className="flex items-center space-x-6">
                <SearchIcon />
                <CartIcon />
                <div onClick={() => setNavbar(!navbar)}>
                  <BarTwoIcon />
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
              <MenuLink name="Store" navbar={navbar} />
              <MenuLink name="Mac" navbar={navbar} />
              <MenuLink name="iPad" navbar={navbar} />
              <MenuLink name="iPhone" navbar={navbar} />
              <MenuLink name="Watch" navbar={navbar} />
              <MenuLink name="AirPods" navbar={navbar} />
              <MenuLink name="TV & Home" navbar={navbar} />
              <MenuLink name="Entertainment" navbar={navbar} />
              <MenuLink name="Accessories" navbar={navbar} />
              <MenuLink name="Support" navbar={navbar} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
