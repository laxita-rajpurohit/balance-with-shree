import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const WellnessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding-bottom: 24px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }
`;
