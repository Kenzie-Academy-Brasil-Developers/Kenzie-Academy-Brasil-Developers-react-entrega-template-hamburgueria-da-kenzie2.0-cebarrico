import { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export const ProtectRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return null;
  }

  return token ? <Outlet /> : navigate("/");
};
