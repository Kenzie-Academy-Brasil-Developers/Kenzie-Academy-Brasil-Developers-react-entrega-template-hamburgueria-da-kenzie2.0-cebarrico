import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

import { InputStyle } from "./style";
import { StyledFieldSet } from "../../styles/fieldset";

interface iIpuntProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  register: UseFormRegisterReturn;
}

export const InputDefault = ({ type, label, register }: iIpuntProps) => {
  return (
    <StyledFieldSet>
      <InputStyle type={type} {...register} />
      <label>{label}</label>
    </StyledFieldSet>
  );
};
