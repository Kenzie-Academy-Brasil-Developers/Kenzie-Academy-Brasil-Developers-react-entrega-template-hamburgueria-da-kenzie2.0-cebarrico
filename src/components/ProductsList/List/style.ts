import styled from "styled-components";

export const StyledProductsList = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;

  gap: 20px;

  @media (min-width: 800px) {
    flex-wrap: wrap;

    max-width: 1000px;
  }

  li {
    min-width: 300px;
    height: 346px;

    border: 2px solid var(--color-grey-3);
    border-radius: 4px;

    padding: 5px;
  }

  li:hover {
    border: 2px solid var(--color-primary);

    button {
      background-color: var(--color-primary);

      border: 2px solid var(--color-primary);
      animation: heartbeat 1.5s ease-in-out infinite both;
    }

    h2 {
      border-top: 2px solid var(--color-primary);
    }
  }

  img {
    width: 177px;
    height: 177px;

    margin-left: 30px;
  }
  h2 {
    height: 40px;

    font-size: 18px;
    font-weight: 700;
    color: var(--color-grey-1);

    border-top: 2px solid var(--color-deactivate);
    padding-top: 5px;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-grey-2);
  }

  p {
    margin-top: 14px;
    margin-bottom: 14px;

    font-size: 14px;
    font-weight: 600;
    color: var(--color-primary);
  }

  button {
    background-color: var(--color-deactivate);
    border: 2px solid var(--color-deactivate);
  }

  @keyframes heartbeat {
    from {
      transform: scale(1);

      transform-origin: center center;

      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.91);

      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(0.98);

      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.87);

      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);

      animation-timing-function: ease-out;
    }
  }
`;
