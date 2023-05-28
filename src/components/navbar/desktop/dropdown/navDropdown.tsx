import React from "react";
import style from "../../../../style/style";
import DropDownItem from "./dropDownItem";

const NavDropdown = ({ data, navColor }: any) => {
  return (
    <div>
      <ul className="grid grid-cols-4 gap-12 mt-6 ">
        {Object.entries(data).map((key, id) => {
          return (
            <li
              className={`flex flex-col mb-10 gap-y-4 ${
                id === 0 ? "col-span-2" : null
              }`}
            >
              <p
                className={
                  navColor === "dark" ? style.txtWhiteXsL : style.txtBlackXsL
                }
              >
                {key[0]}
              </p>

              <DropDownItem
                navColor={navColor}
                data={key[1]}
                key={id}
                index={id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavDropdown;
