import { useEffect, useState } from "react";
import ArrowRightIcon from "../icons/arrowRightIcon";
import style from "../../style/style";
import { Link } from "react-router-dom";

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
        {name === "Support" ? <Link to="/support">{name}</Link> : name}
      </a>
      {navbar === true && open === true ? (
        <ArrowRightIcon color={color} />
      ) : null}
    </div>
  );
};

export default MenuLink;
