// Journey/style.ts
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 0;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  max-width: 1100px;
  width: 100%;
  // border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  // background: linear-gradient(
  //   to right,
  //   #f7f3f7 0%,
  //   #f7f3f7 50%,
  //   #fdfdfd 50%,
  //   #fdfdfd 100%
  // );

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    background: #f7f3f7;
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
    margin-top: 12px;
    border: none;
    background: none;
    color: #5a4762;
    letter-spacing: 0.18em;
    text-transform: lowercase;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  // filter: grayscale(100%);
`;
