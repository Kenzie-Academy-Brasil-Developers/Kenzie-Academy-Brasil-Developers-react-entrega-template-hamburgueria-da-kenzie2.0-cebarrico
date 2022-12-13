import styled from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  height: 38px;
  background-color: var(--color-grey-0);
  color: var(--color-grey-0);
  caret-color: var(--color-primary);
  border: 1px solid var(--color-grey-2);
  border-radius: 4px;
  padding-left: 15px;
  margin-top: 17px;
  &:focus {
    outline: 1px solid var(--color-primary);
    border: 1px solid var(--color-primary);
  }
`;
