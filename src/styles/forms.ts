import styled from "styled-components";

export const DefaultStyleForm = styled.form`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;

  gap: 15px;
  padding: 0 25px;

  h2 {
    margin-top: 21px;
  }

  span {
    color: var(--color-grey-2);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }

  a {
    color: var(--color-grey-2);
    font-weight: 600;
    font-size: 16px;

    text-align: center;
    text-decoration: none;

    cursor: pointer;
  }
`;
