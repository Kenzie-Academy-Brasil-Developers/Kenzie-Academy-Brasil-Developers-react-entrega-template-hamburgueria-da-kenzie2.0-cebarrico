import { Route, Routes } from "react-router-dom";

import { ProtectRoute } from "../components/ProtectRoutes";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { HomePage } from "../pages/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route element={<ProtectRoute />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
