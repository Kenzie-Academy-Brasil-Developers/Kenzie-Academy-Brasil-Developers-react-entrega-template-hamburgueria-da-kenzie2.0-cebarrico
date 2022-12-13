import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1200px;
  height: 139px;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    div {
      display: flex;
      justify-content: flex-end;
    }
  }
  img {
    width: 158px;
    height: 36px;
    margin-bottom: 13px;
  }
  div {
    width: 90%;
    max-width: 382px;
    height: 60px;
  }
  input {
    display: none;
    width: 60%;
    height: 40px;
    padding: 5px;
    outline: none;
    border: 1px solid var(--color-grey-3);
  }
  input:active {
    box-shadow: 2px 2px 15px var(--color-primary) inset;
  }
  input:focus {
    border: 1px solid var(--color-primary);
    border-radius: 8px 0 0 8px;
  }
  input:focus ~ button {
    border-radius: 0 8px 8px 0;
  }
`;
