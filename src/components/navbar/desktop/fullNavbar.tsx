import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "../../icons/searchIcon";
import CartIcon from "../../icons/cartIcon";

const FullNavbar = () => {
  const [open, setOpen] = useState(false);
  const linkNames = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];
  return (
    <>
      {open ? (
        <div className="absolute z-10 w-screen h-screen backdrop-blur-lg bg-black/70"></div>
      ) : null}
      <nav
        className={`w-full  bg-neutral-900  py-4 hidden lg:block z-50 relative md:block ${
          open ? "opacity-100 animate-flip-down " : "opacity-50"
        }`}
      >
        <ul className="flex items-center justify-center space-x-8 ">
          <FontAwesomeIcon icon={faAppleWhole} className="text-white" />
          {linkNames.map((name: string, id: number) => {
            return (
              <li
                className="text-sm font-light text-white"
                onMouseEnter={() => {
                  setOpen(true);
                }}
                key={id}
              >
                {name}
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
                <p className="text-xs font-light text-white">Shop</p>
                <a href="#" className="text-2xl font-bold text-white">
                  {" "}
                  Shop The Latest
                </a>
                <a href="#" className="text-2xl font-bold text-white">
                  {" "}
                  Mac
                </a>
                <a href="#" className="text-2xl font-bold text-white">
                  {" "}
                  iPad
                </a>
                <a href="#" className="text-2xl font-bold text-white">
                  {" "}
                  iPhone
                </a>
                <a href="#" className="text-2xl font-bold text-white">
                  {" "}
                  Apple Watch
                </a>
                <a href="#" className="text-2xl font-bold text-white">
                  {" "}
                  Accessories
                </a>
              </li>
              <li className="flex flex-col mb-10 gap-y-4 animate-flip-down ">
                {" "}
                <p className="text-xs font-light text-white">Quick Links</p>
                <a href="#" className="text-sm font-bold text-white">
                  {" "}
                  Find a store
                </a>
                <a href="#" className="text-sm font-bold text-white">
                  {" "}
                  Order Status
                </a>
                <a href="#" className="text-sm font-bold text-white">
                  {" "}
                  Apple Trade In
                </a>
                <a href="#" className="text-sm font-bold text-white">
                  {" "}
                  Financing
                </a>
              </li>
              <li className="flex flex-col mb-10 gap-y-4 animate-flip-down ">
                {" "}
                <p className="text-xs font-light text-white">Quick Links</p>
                <a href="#" className="text-sm font-bold text-white">
                  {" "}
                  Find a store
                </a>
                <a href="#" className="text-sm font-bold text-white">
                  {" "}
                  Order Status
                </a>
                <a href="#" className="text-sm font-bold text-white">
                  {" "}
                  Apple Trade In
                </a>
                <a href="#" className="text-sm font-bold text-white">
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
