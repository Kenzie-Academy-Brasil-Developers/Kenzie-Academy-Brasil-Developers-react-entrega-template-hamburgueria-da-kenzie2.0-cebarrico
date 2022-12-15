import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { LoginForm } from "./LoginForm";
import { InfoSection } from "../../components/InfoSection";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }

    setLoading(false);
  }, [navigate]);

  if (loading) {
    return null;
  }

  return (
    <main>
      <InfoSection />
      <LoginForm />
    </main>
  );
};
