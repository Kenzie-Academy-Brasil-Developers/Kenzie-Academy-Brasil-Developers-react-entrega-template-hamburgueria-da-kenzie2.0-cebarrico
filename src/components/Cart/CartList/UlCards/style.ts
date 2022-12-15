import styled from "styled-components";

export const StyledUlCart = styled.ul`
  width: 100%;
  max-height: 400px;

  overflow-y: scroll;
  display: block;
  flex-direction: column;
  justify-content: center;

  gap: 5px;

  li {
    width: 100%;
    height: 80px;

    display: flex;

    margin-bottom: 18px;
    padding: 10px;

    animation: fade 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  @keyframes fade {
    0% {
      transform: translateZ(80px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
  img {
    width: 82px;
    height: 80px;
  }
  div {
    margin-top: 0;
  }

  .infoContainer {
    width: 78%;

    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;

    padding-left: 5px;
  }

  .quantityContainer {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }
  .removeBtns {
    color: var(--color-secondary);
    cursor: pointer;
  }
  .addBtm {
    color: var(--color-primary);
    cursor: pointer;
  }
  span {
    font-size: 20px;
  }
  .deleteBtm {
    width: 14px;
    height: 18px;

    cursor: pointer;
  }
`;
