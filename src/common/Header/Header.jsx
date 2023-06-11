import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={
        pathname === "/sign-in" || pathname === "/sign-up" ? "hidden" : ""
      }
    >
      Header
    </div>
  );
};

export default Header;
