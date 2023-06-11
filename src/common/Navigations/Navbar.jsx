import React from "react";

// icons
import { BsBell } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

// routes
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 w-full z-10 bg-white text-gray-700 border-b-2 pl-4 py-3 pr-8">
      <div className="flex justify-between items-center">
        <div>
          {pathname !== "/main" ? (
            <div className="flex items-center gap-5">
              <Link to={ROUTES.MAIN}>
                <MdArrowBack size="20" />
              </Link>
              <h1 className="text-lg">Create Test</h1>
            </div>
          ) : (
            <Link
              className="text-primary text-lg font-semibold uppercase"
              to={ROUTES.MAIN}
            >
              Brand
            </Link>
          )}
        </div>
        <div className="flex items-center gap-7">
          <button className="btn-primary">Prising</button>
          <button className="text-primary">
            <BsBell size="20" />
          </button>
          <button className="text-primary">
            <FaUserAlt size="22" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
