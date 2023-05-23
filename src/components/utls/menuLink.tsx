import { useEffect, useState } from "react";
import ArrowRightIcon from "../icons/arrowRightIcon";
import HoverDropdown from "./hoverDropdown";
import style from "../../style/style";

const MenuLink = ({ name, navbar }: any) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (navbar === false) {
      setOpen(false);
    }
  }, [navbar]);
  return (
    <div
      className={`flex  hover:text-indigo-200 lg:text-sm lg:font-light ${style.txtWhite3xlSB}`}
    >
      <a
        href="javascript:void(0)"
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {name}
      </a>
      {navbar === true && open === true ? <ArrowRightIcon /> : null}
    </div>
  );
};

export default MenuLink;
