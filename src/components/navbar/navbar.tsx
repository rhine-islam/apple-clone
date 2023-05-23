import React, { useState } from "react";
import MobileNavbar from "./mobile/mobileNavbar";
import FullNavbar from "./desktop/fullNavbar";

const Navbar = () => {
  return (
    <section>
      <MobileNavbar />
      <FullNavbar />
    </section>
  );
};

export default Navbar;
