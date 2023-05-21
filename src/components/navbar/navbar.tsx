import React, { useState } from "react";
import MobileNavbar from "./mobile/mobileNavbar";
import FullNavbar from "./desktop/fullNavbar";

const Navbar = () => {
  return (
    <nav>
      <MobileNavbar />
      <FullNavbar />
    </nav>
  );
};

export default Navbar;
