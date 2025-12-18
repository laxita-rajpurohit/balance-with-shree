// Journey/style.ts
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const Inner = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: #f7f3f7;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    // border-radius: 0;
  }
`;

export const Text = styled.div`
  padding: 72px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  h3 {
    font-size: 32px;
    letter-spacing: 0.06em;
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    max-width: 460px;
  }

  button {
    border: none;
    background: none;
    color: #18775e;
    letter-spacing: 0.18em;
    cursor: pointer;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 32px 24px 28px;
    text-align: left;

    h3 {
      font-size: 24px;
    }

    p {
      max-width: none;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 260px;
    object-fit: contain;
  }
`;
