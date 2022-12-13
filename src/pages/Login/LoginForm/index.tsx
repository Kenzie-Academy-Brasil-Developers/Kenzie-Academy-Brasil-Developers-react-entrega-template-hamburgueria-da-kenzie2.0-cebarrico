import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext } from "../../../contexts/AuthContext";

import { InputDefault } from "../../../components/Inputs";
import { InputStyle } from "../../../components/Inputs/style";
import { StyledFieldSet } from "../../../styles/fieldset";

import { DefaultStyleForm } from "../../../styles/forms";

import { loginSchema } from "./LoginSchema";

interface iLoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <section>
      <DefaultStyleForm onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
        <StyledFieldSet>
          <InputStyle required type="email" {...register("email")} />
          <label>Email</label>
        </StyledFieldSet>
        <StyledFieldSet>
          <InputStyle required type="password" {...register("password")} />
          <label>Senha</label>
        </StyledFieldSet>
        <button type="submit">login</button>
        <span>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <Link to={"/cadastro"}>Cadastrar</Link>
      </DefaultStyleForm>
    </section>
  );
};
