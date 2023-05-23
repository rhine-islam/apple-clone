import React, { useState } from "react";
import MobileNavbar from "./mobile/mobileNavbar";
import FullNavbar from "./desktop/fullNavbar";

const Navbar = ({ theme }: any) => {
  return (
    <section>
      <MobileNavbar navColor={theme} />
      <FullNavbar navColor={theme} />
    </section>
  );
};

export default Navbar;
