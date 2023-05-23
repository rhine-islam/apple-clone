import { useEffect, useState } from "react";
import ArrowRightIcon from "../icons/arrowRightIcon";
import HoverDropdown from "./hoverDropdown";
import style from "../../style/style";

const MenuLink = ({ name, navbar, color }: any) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (navbar === false) {
      setOpen(false);
    }
  }, [navbar]);
  return (
    <div
      className={`flex   lg:text-sm lg:font-light  ${
        color === "dark" ? style.txtWhite3xlSB : style.txtBlack3xlSB
      }`}
    >
      <a
        href="javascript:void(0)"
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {name}
      </a>
      {navbar === true && open === true ? (
        <ArrowRightIcon color={color} />
      ) : null}
    </div>
  );
};

export default MenuLink;
