import React from "react";

// icons
import { BsBell } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdArrowBack, MdOutlineLogout } from "react-icons/md";

// routes
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-10 bg-secondary text-gray-700 border-b-2 pl-4 py-3 pr-8">
      <div className="flex justify-between items-center">
        <div>
          {pathname !== "/main" ? (
            <div className="flex items-center gap-5">
              <button
                className="hover:bg-slate-100 rounded-full p-2 duration-300"
                onClick={() => navigate(-1)}
              >
                <MdArrowBack size="20" />
              </button>
              <h1 className="text-lg">Go Back</h1>
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
          <div className="user-block">
            <button className="text-primary">
              <FaUserAlt size="22" />
            </button>
            <div className="tooltip">
              <div className="shadow-md bg-white py-2 w-full rounded">
                <Link
                  to={ROUTES.SINGIN}
                  className="px-3 py-2 hover:bg-primary/10 hover:text-primary flex justify-between items-center w-full"
                >
                  <span>Logout</span>
                  <MdOutlineLogout />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
