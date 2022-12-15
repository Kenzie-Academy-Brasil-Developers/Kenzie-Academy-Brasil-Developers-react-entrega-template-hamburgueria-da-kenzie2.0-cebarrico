import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext } from "../../../contexts/AuthContext";

import { InputDefault } from "../../../components/Inputs";

import { ButtonDefault } from "../../../styles/buttons";

import { DefaultStyleForm } from "../../../styles/forms";

import { loginSchema } from "./LoginSchema";

interface iLoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <section>
      <DefaultStyleForm onSubmit={handleSubmit(login)}>
        <h2>Login</h2>

        <InputDefault label="Email" register={register("email")} type="email" />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <InputDefault
          label="Senha"
          register={register("password")}
          type="password"
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <ButtonDefault type="submit">login</ButtonDefault>
        <span>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <Link to={"/cadastro"}>Cadastrar</Link>
      </DefaultStyleForm>
    </section>
  );
};
