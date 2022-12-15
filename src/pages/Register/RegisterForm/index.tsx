import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext } from "../../../contexts/AuthContext";
import { registerSchema } from "./RegisterSchema";

import { SectionFormStyle } from "./style";
import { InputDefault } from "../../../components/Inputs";
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
        <InputDefault label="Nome" register={register("name")} type="name" />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <InputDefault label="Email" register={register("email")} type="email" />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <InputDefault
          label="Senha"
          register={register("password")}
          type="password"
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <ButtonDefault type="submit">Registrar</ButtonDefault>
      </DefaultStyleForm>
    </SectionFormStyle>
  );
};
