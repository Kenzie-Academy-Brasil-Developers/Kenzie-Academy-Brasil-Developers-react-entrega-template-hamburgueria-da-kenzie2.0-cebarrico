import { createContext, useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { api } from "../../services/api";

interface iAuthContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: iAuthContextProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  function login() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
