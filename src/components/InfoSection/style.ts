import styled from "styled-components";

export const StyledInfoSection = styled.section`
  max-width: 439px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  gap: 35px;
  padding: 0 25px;

  @media (min-width: 600px) {
    margin-top: -30px;
  }
  div {
    display: flex;
    gap: 20px;
  }
`;
