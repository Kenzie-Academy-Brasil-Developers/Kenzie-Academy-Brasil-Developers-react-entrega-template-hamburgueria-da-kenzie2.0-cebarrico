import { InputStyle } from "./style";

interface iIpunt {
  type: string;
  label: string;
  register: () => void;
}

export const InputDefault = ({ type, label, register }: iIpunt) => {
  return (
    <fieldset>
      <InputStyle type={type} {...register} />
    </fieldset>
  );
};
