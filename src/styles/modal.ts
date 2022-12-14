import styled from "styled-components";

export const ModalContainer = styled.section`
  display: flex;
  align-items: center;

  flex-direction: column;

  width: 100%;
  height: 100vh;
  position: fixed;

  z-index: 50;

  background-color: rgba(51, 51, 51, 0.5);

  .modalContainer {
    width: 90%;
    max-width: 500px;

    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: start;

    flex-direction: column;

    margin-top: 60px;

    background-color: var(--color-grey-4);

    border-radius: 4px;
  }

  h5 {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-grey-1);
    margin-top: 40px;
  }

  h3 {
    color: var(--color-grey-4);
    font-weight: 700;
    font-size: 18px;

    padding-left: 10px;
  }

  button {
    font-size: 18px;
    color: var(--color-grey-4);

    padding-right: 10px;

    background: none;

    border: none;

    cursor: pointer;
  }

  .cartHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 100%;
    height: 40px;

    background-color: var(--color-primary);
    margin-top: 0;

    padding: 5px;
    border-radius: 4px 4px 0 0;
  }

  .totalContainer {
    width: 100%;

    display: flex;
    justify-content: space-around;

    margin-top: 10px;

    p {
      font-weight: 600;
      font-size: 14px;
      color: var(--color-grey-1);
    }

    span {
      font-weight: 600;
      font-size: 14px;
      color: var(--color-grey-2);
    }
  }

  .removeAllBtm {
    margin: 25px 0;

    font-weight: 600;
    font-size: 16px;
    color: var(--color-grey-2);

    border: none;

    cursor: pointer;
  }
`;
