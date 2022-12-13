import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext } from "../../../contexts/AuthContext";

import { StyledFieldSet } from "../../../styles/fieldset";
import { InputStyle } from "../../../components/Inputs/style";
import { DefaultStyleForm } from "../../../styles/forms";

interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const { registerUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({});

  return (
    <section>
      <div>
        <h2>Cadastro</h2>
        <Link to={"/"}>Voltar ao Login</Link>
      </div>
      <DefaultStyleForm onSubmit={handleSubmit(registerUser)}>
        <StyledFieldSet>
          <InputStyle required type="text" {...register("name")} />
          <label>Nome</label>
        </StyledFieldSet>
        <StyledFieldSet>
          <InputStyle required type="email" {...register("email")} />
          <label>Email</label>
        </StyledFieldSet>
        <StyledFieldSet>
          <InputStyle required type="password" {...register("password")} />
          <label>Senha</label>
        </StyledFieldSet>
        <button type="submit">Registrar</button>
      </DefaultStyleForm>
    </section>
  );
};
