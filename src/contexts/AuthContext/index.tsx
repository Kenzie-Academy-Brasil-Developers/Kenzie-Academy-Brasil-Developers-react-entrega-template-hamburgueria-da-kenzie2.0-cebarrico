import { createContext, useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { api } from "../../services/api";

import { iLogin, iUser, iLoginResponse, iRegister } from "./type";

interface iAuthContextProps {
  children: React.ReactNode;
}
interface iAuthContext {
  login: (data: iLogin) => void;
  registerUser: (data: iRegister) => void;
}
export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthContextProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  async function login(data: iLogin) {
    try {
      const response = await api.post("login", data);
      const { accessToken, user: userData } = response.data;
      console.log(accessToken);

      localStorage.setItem("token", accessToken);

      const toNavigate = location.state?.from?.pathname || "/home";
      navigate(toNavigate, { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  async function registerUser(data: iRegister) {
    try {
      const response = await api.post("users", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider value={{ login, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
