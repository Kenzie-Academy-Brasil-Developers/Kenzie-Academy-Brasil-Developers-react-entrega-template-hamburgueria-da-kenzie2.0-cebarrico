import { createContext, useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { api } from "../../services/api";

import { iLogin, iUser, iRegister } from "./type";

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
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  products: iProducts[];
  user: iUser | null;
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthContextProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
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
      const { accessToken, user } = response.data;

      localStorage.setItem("token", accessToken);
      setUser(user);
      setLoading(false);
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
    <AuthContext.Provider
      value={{ login, registerUser, loading, setLoading, products, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
