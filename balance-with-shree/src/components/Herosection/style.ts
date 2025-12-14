// style.ts
import styled from "styled-components";

export const Wrapper = styled.section`
  background: white;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 380px;
  }

  @media (max-width: 480px) {
    height: 340px;
  }
`;

export const Content = styled.div`
  position: absolute;
  left: 12%;
  top: 18%;
  text-align: left;
  color: #24312d;

  h1 {
    font-size: 42px;
    line-height: 1.05;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 26px;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Button = styled.button`
  padding: 12px 26px;
  border-radius: 40px;
  border: none;
  background: #2f4f4f;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
