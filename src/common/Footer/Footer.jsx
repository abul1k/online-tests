import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <footer
      className={
        pathname === "/sign-in" || pathname === "/sign-up" ? "hidden" : ""
      }
    >
      Footer
    </footer>
  );
};

export default Footer;
