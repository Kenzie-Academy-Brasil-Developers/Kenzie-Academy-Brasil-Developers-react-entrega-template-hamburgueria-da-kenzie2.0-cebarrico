import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`
  position: relative;
  label {
    position: absolute;
    top: 22px;
    left: 11px;

    pointer-events: none;

    background-color: var(--color-grey-4);

    padding: 5px;

    color: var(--color-grey-2);
    font-size: 15px;
  }
  input:focus ~ label,
  input:valid ~ label {
    position: absolute;
    top: 6px;
    left: 11px;

    font-size: 12px;
    font-weight: 600;
    color: var(--color-primary);

    transition: 0.2s ease-in-out;
  }
`;
