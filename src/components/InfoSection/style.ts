import styled from "styled-components";

export const StyledInfoSection = styled.section`
  max-width: 439px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  gap: 35px;

  @media (min-width: 600px) {
    margin-top: -30px;
  }

  div {
    max-width: 377px;
    display: flex;
    gap: 20px;

    padding: 14px 17px 24px 18px;
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
