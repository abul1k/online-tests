import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

// Routes
import AppRoutes from "./Routes/Routes";
import { ROUTES } from "./utils/routes";

// components
import Navbar from "./common/Navigations/Navbar";
import Sidebar from "./common/Navigations/Sidebar";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate(ROUTES.MAIN);
    }
  }, [navigate, pathname]);

  const checkRoute = () => {
    if (pathname === "/sign-up" || pathname === "/sign-in") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      {checkRoute() ? (
        <>
          <Navbar />
          <Sidebar />
          <div className="ml-56 p-8 pt-24 min-h-screen bg-[#f5f5f5]">
            <AppRoutes />
          </div>
        </>
      ) : (
        <Routes>
          <Route path={ROUTES.SINGIN} element={<SignIn />} />
          <Route path={ROUTES.SINGUP} element={<SignUp />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
