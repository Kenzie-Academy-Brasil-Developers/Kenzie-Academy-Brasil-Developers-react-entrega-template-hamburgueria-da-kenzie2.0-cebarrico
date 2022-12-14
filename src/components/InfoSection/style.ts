import styled from "styled-components";

export const StyledInfoSection = styled.section`
  max-width: 439px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  gap: 35px;
  img {
    max-width: 240px;
  }
  @media (min-width: 600px) {
    margin-top: -30px;
  }
  div {
    display: flex;
    gap: 20px;
    margin-left: 20px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: var(--color-grey-2);
  }
  b {
    color: var(--color-grey-1);
  }
`;
