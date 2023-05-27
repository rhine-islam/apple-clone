import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "../../icons/searchIcon";
import CartIcon from "../../icons/cartIcon";
import style from "../../../style/style";
import data from "../../../data/data";
import { Link } from "react-router-dom";

const FullNavbar = ({ navColor }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <div
          className={
            navColor === "dark"
              ? style.navBackdropBlack
              : style.navBackdropWhite
          }
        ></div>
      ) : null}
      <nav
        className={`w-full  ${
          navColor === "dark" ? style.navBlack : style.navWhite
        }  py-4 hidden lg:block z-50 fixed md:block ${
          open === true && navColor === "dark"
            ? `animate-flip-down ${style.navBlackSolid}`
            : open === true && navColor === "white"
            ? `animate-flip-down ${style.navWhiteSolid}`
            : null
        }`}
      >
        <ul className="flex items-center justify-center space-x-8 ">
          <Link to="/">
            <FontAwesomeIcon
              icon={faAppleWhole}
              className={navColor === "dark" ? style.txtWhite : style.txtBlack}
            />
          </Link>
          {data.linkNames.map((name: string, id: number) => {
            return (
              <li
                className={
                  navColor === "dark" ? style.txtWhite : style.txtBlack
                }
                onMouseEnter={() => {
                  setOpen(true);
                }}
                key={id}
              >
                {name === "Support" ? <Link to="/support">{name}</Link> : name}
              </li>
            );
          })}

          <SearchIcon color={navColor} />
          <CartIcon color={navColor} />
        </ul>
        {open ? (
          <div
            className="flex justify-center -ml-64"
            onMouseLeave={() => {
              setOpen(false);
            }}
          >
            <ul className="grid grid-cols-3 gap-12 mt-6">
              <li className="flex flex-col mb-10 gap-y-4 animate-flip-down">
                {" "}
                <p
                  className={
                    navColor === "dark" ? style.txtWhiteXsL : style.txtBlackXsL
                  }
                >
                  Shop
                </p>
                <a
                  href="#"
                  className={
                    navColor === "dark"
                      ? style.txtWhite2xlB
                      : style.txtBlack2xlB
                  }
                >
                  {" "}
                  Shop The Latest
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark"
                      ? style.txtWhite2xlB
                      : style.txtBlack2xlB
                  }
                >
                  {" "}
                  Mac
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark"
                      ? style.txtWhite2xlB
                      : style.txtBlack2xlB
                  }
                >
                  {" "}
                  iPad
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark"
                      ? style.txtWhite2xlB
                      : style.txtBlack2xlB
                  }
                >
                  {" "}
                  iPhone
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark"
                      ? style.txtWhite2xlB
                      : style.txtBlack2xlB
                  }
                >
                  {" "}
                  Apple Watch
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark"
                      ? style.txtWhite2xlB
                      : style.txtBlack2xlB
                  }
                >
                  {" "}
                  Accessories
                </a>
              </li>
              <li className="flex flex-col mb-10 gap-y-4 animate-flip-down ">
                {" "}
                <p
                  className={
                    navColor === "dark" ? style.txtWhiteXsL : style.txtBlackXsL
                  }
                >
                  Quick Links
                </p>
                <a
                  href="#"
                  className={
                    navColor === "dark" ? style.txtWhiteSmB : style.txtBlackSmB
                  }
                >
                  {" "}
                  Find a store
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark" ? style.txtWhiteSmB : style.txtBlackSmB
                  }
                >
                  {" "}
                  Order Status
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark" ? style.txtWhiteSmB : style.txtBlackSmB
                  }
                >
                  {" "}
                  Apple Trade In
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark" ? style.txtWhiteSmB : style.txtBlackSmB
                  }
                >
                  {" "}
                  Financing
                </a>
              </li>
              <li className="flex flex-col mb-10 gap-y-4 animate-flip-down ">
                {" "}
                <p
                  className={
                    navColor === "dark" ? style.txtWhiteXsL : style.txtBlackXsL
                  }
                >
                  Quick Links
                </p>
                <a
                  href="#"
                  className={
                    navColor === "dark" ? style.txtWhiteSmB : style.txtBlackSmB
                  }
                >
                  {" "}
                  Find a store
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark" ? style.txtWhiteSmB : style.txtBlackSmB
                  }
                >
                  {" "}
                  Order Status
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark" ? style.txtWhiteSmB : style.txtBlackSmB
                  }
                >
                  {" "}
                  Apple Trade In
                </a>
                <a
                  href="#"
                  className={
                    navColor === "dark" ? style.txtWhiteSmB : style.txtBlackSmB
                  }
                >
                  {" "}
                  Financing
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default FullNavbar;
