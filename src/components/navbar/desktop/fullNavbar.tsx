import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "../../icons/searchIcon";
import CartIcon from "../../icons/cartIcon";
import style from "../../../style/style";
import data from "../../../data/data";
import { Link } from "react-router-dom";
const FullNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? <div className={style.navBackdrop}></div> : null}
      <nav
        className={`w-full  bg-neutral-900  py-4 hidden lg:block z-50 relative md:block ${
          open ? "opacity-100 animate-flip-down " : "opacity-50"
        }`}
      >
        <ul className="flex items-center justify-center space-x-8 ">
          <Link to="/">
            <FontAwesomeIcon icon={faAppleWhole} className={style.txtWhite} />
          </Link>
          {data.linkNames.map((name: string, id: number) => {
            return (
              <li
                className={style.txtWhiteSmL}
                onMouseEnter={() => {
                  setOpen(true);
                }}
                key={id}
              >
                {name === "Support" ? <Link to="/support">{name}</Link> : name}
              </li>
            );
          })}

          <SearchIcon />
          <CartIcon />
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
                <p className={style.txtWhiteXsL}>Shop</p>
                <a href="#" className={style.txtWhite2xlB}>
                  {" "}
                  Shop The Latest
                </a>
                <a href="#" className={style.txtWhite2xlB}>
                  {" "}
                  Mac
                </a>
                <a href="#" className={style.txtWhite2xlB}>
                  {" "}
                  iPad
                </a>
                <a href="#" className={style.txtWhite2xlB}>
                  {" "}
                  iPhone
                </a>
                <a href="#" className={style.txtWhite2xlB}>
                  {" "}
                  Apple Watch
                </a>
                <a href="#" className={style.txtWhite2xlB}>
                  {" "}
                  Accessories
                </a>
              </li>
              <li className="flex flex-col mb-10 gap-y-4 animate-flip-down ">
                {" "}
                <p className={style.txtWhiteXsL}>Quick Links</p>
                <a href="#" className={style.txtWhiteSmB}>
                  {" "}
                  Find a store
                </a>
                <a href="#" className={style.txtWhiteSmB}>
                  {" "}
                  Order Status
                </a>
                <a href="#" className={style.txtWhiteSmB}>
                  {" "}
                  Apple Trade In
                </a>
                <a href="#" className={style.txtWhiteSmB}>
                  {" "}
                  Financing
                </a>
              </li>
              <li className="flex flex-col mb-10 gap-y-4 animate-flip-down ">
                {" "}
                <p className="text-xs font-light text-white">Quick Links</p>
                <a href="#" className={style.txtWhiteSmB}>
                  {" "}
                  Find a store
                </a>
                <a href="#" className={style.txtWhiteSmB}>
                  {" "}
                  Order Status
                </a>
                <a href="#" className={style.txtWhiteSmB}>
                  {" "}
                  Apple Trade In
                </a>
                <a href="#" className={style.txtWhiteSmB}>
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
