import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { InputDefault } from "../../../components/Inputs";

import { DefaultStyleForm } from "../../../styles/forms";

export const LoginForm = () => {
  return (
    <section>
      <DefaultStyleForm>
        <h2>Login</h2>
        <InputDefault />
        <InputDefault />
        <button>login</button>
        <span>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <Link to={"/cadastro"}>Cadastrar</Link>
      </DefaultStyleForm>
    </section>
  );
};
