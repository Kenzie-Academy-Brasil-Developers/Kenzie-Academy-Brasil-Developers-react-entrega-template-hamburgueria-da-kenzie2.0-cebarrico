import styled from "styled-components";

export const SearchInputStyle = styled.fieldset`
  position: relative;

  width: 50px;
  height: 50px;

  background: var(--color-grey-4);

  border: 4px solid white;
  border-radius: 25px;

  transition: all 1s;

  input {
    position: absolute;
    left: -185%;
    top: 50%;

    transform: translate(-50%, -50%);
    width: 250px;
    height: 40px;
    padding: 10px;

    color: var(--color-primary);

    outline: none;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    box-shadow: 2px 2px 15px var(--color-primary) inset;
  }

  img {
    width: 30px;
    height: 30px;

    text-align: center;
    position: absolute;
    top: 7px;
    right: 6px;

    background: none;

    font-size: 1.2em;

    box-sizing: border-box;

    border-radius: 50%;

    padding: 0px;

    transition: all 1s;

    cursor: pointer;
  }
`;
