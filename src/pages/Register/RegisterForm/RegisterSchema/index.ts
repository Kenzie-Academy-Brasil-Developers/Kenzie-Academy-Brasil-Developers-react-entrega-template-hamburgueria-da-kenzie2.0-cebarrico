import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Tem menos de 8 caracteres")
    .matches(/(?=.*?[A-Z])/, "Necessario uma letra maiuscula")
    .matches(/(?=.*?[a-z])/, "Necessario uma letra minuscula")
    .matches(/(?=.*?[0-9])/, "Necessario pelo menos um numero")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Necessario um caracter especial"),
});
