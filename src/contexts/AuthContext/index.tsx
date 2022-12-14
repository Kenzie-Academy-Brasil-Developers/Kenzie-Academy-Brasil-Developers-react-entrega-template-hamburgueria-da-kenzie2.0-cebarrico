import { createContext, useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { api } from "../../services/api";

import { iLogin, iUser, iLoginResponse, iRegister } from "./type";

interface iAuthContextProps {
  children: React.ReactNode;
}

export interface iProducts {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  key: string;
  quantity: number;
}

interface iAuthContext {
  login: (data: iLogin) => Promise<void>;
  registerUser: (data: iRegister) => Promise<void>;
  loading: boolean;
  products: iProducts[];
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthContextProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState<iProducts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await api.get("/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  async function login(data: iLogin) {
    try {
      const response = await api.post("login", data);
      const { accessToken } = response.data;

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

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider value={{ login, registerUser, loading, products }}>
      {children}
    </AuthContext.Provider>
  );
};
