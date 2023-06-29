import React from "react";
import LOGO from "../../images/logo-white.png";

const Footer = () => {
  return (
    <nav className="fixed bottom-0 right-0 w-[94vw] z-10 bg-primary px-4 py-2 overflow-hidden">
      <div className="flex justify-between items-center">
        <img className="absolute w-52 mt-5" src={LOGO} alt="" />
        <div>
          <div></div>
        </div>
        <div className="flex items-center gap-7">
          <button className="btn-danger">End The Test</button>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
