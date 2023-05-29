import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "../../icons/searchIcon";
import CartIcon from "../../icons/cartIcon";
import style from "../../../style/style";
import data from "../../../data/data";
import { Link } from "react-router-dom";
import NavDropdown from "./dropdown/navDropdown";

const FullNavbar = ({ navColor }: any) => {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [linkName, setLinkName] = useState<any>("");
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    if (offset > 300) {
      setOpen(false);
      setOffset(0);
    }
  });


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
        }  py-3 hidden lg:block z-50 fixed md:block  ${
          open === true && navColor === "dark"
            ? `${style.navBlackSolid}`
            : open === true && navColor === "white"
            ? ` ${style.navWhiteSolid}`
            : null
        }`}
      >
        <ul className="flex items-center justify-center lg:space-x-8 md:space-x-4">
          <Link to="/">
            <FontAwesomeIcon
              icon={faAppleWhole}
              className={navColor === "dark" ? style.txtWhite : style.txtBlack}
            />
          </Link>

          {Object.keys(data.navs).map((name: string, id: number) => {
            return (
              <li
                className={`font-light ${
                  navColor === "dark" ? style.txtWhite : style.txtBlack
                }`}
                onMouseEnter={() => {
                  setOpen(true);
                  setLinkName(name);
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
            className="flex justify-center py-6 -ml-48"
            onMouseLeave={() => {
              setOpen(false);
              setLinkName("");
            }}
            onScroll={() => {
              setOpen(false);
            }}
          >
            {Object.entries(data.navs).map((key: any, id: number) =>
              key[0] === linkName ? (
                <NavDropdown navColor={navColor} data={key[1]} />
              ) : null
            )}
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default FullNavbar;
