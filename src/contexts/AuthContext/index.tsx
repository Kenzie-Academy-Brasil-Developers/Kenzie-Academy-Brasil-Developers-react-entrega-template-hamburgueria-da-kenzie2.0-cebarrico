import { createContext, useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { api } from "../../services/api";

import { toast } from "react-toastify";

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

      setLoading(false);
      getProducts();
    }
    loadProducts();
  }, []);

  async function login(data: iLogin) {
    try {
      const response = await api.post("login", data);
      const { accessToken, user: userResponse } = response.data;

      localStorage.setItem("token", accessToken);
      setUser(userResponse);

      setLoading(false);

      toast.success(`Bem Vindo! ${userResponse.name}`);
      const toNavigate = location.state?.from?.pathname || "/home";
      navigate(toNavigate, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Usuario ou senha incorretos");
    }
  }

  async function registerUser(data: iRegister) {
    try {
      const response = await api.post("users", data);
      toast.success("Conta criada com sucesso!");
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("Ops algo deu errado!!");
    }
  }

  async function getProducts() {
    const token = localStorage.getItem("token");
    try {
      const { data } = await api.get("/products", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setProducts(data);
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
