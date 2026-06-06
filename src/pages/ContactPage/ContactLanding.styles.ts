import styled, { createGlobalStyle, css } from "styled-components";

const surfaceCard = css`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

export const fadeIn = `
  @keyframes contactFadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const GlobalStyle = createGlobalStyle`${fadeIn}`;

export const Page = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 88px;

  @media (min-width: 769px) {
    padding-bottom: 32px;
  }
`;

export const Column = styled.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  > * {
    scroll-margin-top: 80px;
  }

  @media (min-width: 769px) {
    gap: 24px;

    > * {
      scroll-margin-top: 112px;
    }
  }
`;

export const CardSection = styled.section`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

