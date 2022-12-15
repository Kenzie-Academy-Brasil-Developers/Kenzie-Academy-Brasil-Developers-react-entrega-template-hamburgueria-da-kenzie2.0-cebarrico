import styled from "styled-components";

export const StyledNav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1200px;
  height: 139px;

  padding: 10px 10px 18px 10px;

  img {
    width: 158px;
    height: 36px;
  }

  div {
    position: relative;

    width: 90%;
    max-width: 382px;
    height: 60px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 20px;
  }

  div > img {
    width: 30px;
    cursor: pointer;
  }
  .searchIcon {
    z-index: 11;

    width: 22px;
    height: 23px;

    outline: 1px green;

    margin-right: 10px;
  }

  span {
    position: absolute;
    top: 5px;
    right: 45px;
    background-color: var(--color-primary);
    font-weight: 700;
    font-size: 12px;
    color: var(--color-grey-4);
    border-radius: 10px;

    padding: 5px;
  }

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
`;
