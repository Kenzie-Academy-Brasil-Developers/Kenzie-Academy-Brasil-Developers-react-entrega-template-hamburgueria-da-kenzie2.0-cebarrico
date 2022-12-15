import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext } from "../../../contexts/AuthContext";
import { registerSchema } from "./RegisterSchema";

import { SectionFormStyle } from "./style";
import { StyledFieldSet } from "../../../styles/fieldset";
import { InputStyle } from "../../../components/Inputs/style";
import { DefaultStyleForm } from "../../../styles/forms";
import { ButtonDefault } from "../../../styles/buttons";

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
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <SectionFormStyle>
      <div>
        <h2>Cadastro</h2>
        <Link to={"/"}>Voltar ao Login</Link>
      </div>
      <DefaultStyleForm onSubmit={handleSubmit(registerUser)}>
        <StyledFieldSet>
          <InputStyle required type="text" {...register("name")} />
          <label>Nome</label>
          {errors.name?.message && <p>{errors.name.message}</p>}
        </StyledFieldSet>
        <StyledFieldSet>
          <InputStyle required type="email" {...register("email")} />
          <label>Email</label>
          {errors.email?.message && <p>{errors.email.message}</p>}
        </StyledFieldSet>
        <StyledFieldSet>
          <InputStyle required type="password" {...register("password")} />
          <label>Senha</label>
          {errors.password?.message && <p>{errors.password.message}</p>}
        </StyledFieldSet>
        <ButtonDefault type="submit">Registrar</ButtonDefault>
      </DefaultStyleForm>
    </SectionFormStyle>
  );
};
