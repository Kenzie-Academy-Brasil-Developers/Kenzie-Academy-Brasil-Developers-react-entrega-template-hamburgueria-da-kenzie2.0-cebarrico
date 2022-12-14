import { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export const ProtectRoute = () => {
  const navigate = useNavigate();
  const { products, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }

  return products ? <Outlet /> : navigate("/");
};
