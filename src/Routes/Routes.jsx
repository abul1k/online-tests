import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Main from "../pages/Main";
import { ROUTES } from "../utils/routes";
import NotFound from "../pages/NotFound";
import CreateCustomTest from "../pages/CreateCustomTest";
import CreateModule from "../pages/CreateModule";
import CreateModuleTest from "../pages/CreateModuleTest";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Main />} />
      <Route path={ROUTES.CUSTOMTEST} element={<CreateCustomTest />} />
      <Route path={ROUTES.CREATEMODULE} element={<CreateModule />} />
      <Route path={ROUTES.CREATEMODULETEST} element={<CreateModuleTest />} />
      <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
