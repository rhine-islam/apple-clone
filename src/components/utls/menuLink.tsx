import { useEffect, useState } from "react";
import ArrowRightIcon from "../icons/arrowRightIcon";
import HoverDropdown from "./hoverDropdown";

const MenuLink = ({ name, navbar }: any) => {
  const [open, setOpen] = useState(false);
  console.log({ navbar: navbar, open: open });
  useEffect(() => {
    if (navbar === false) {
      setOpen(false);
    }
  }, [navbar]);
  return (
    <div className="flex text-3xl font-semibold text-white hover:text-indigo-200 lg:text-sm lg:font-light ">
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
