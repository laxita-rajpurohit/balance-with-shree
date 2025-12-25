import styled from "styled-components";

export const Container = styled.section`
  padding: 140px 20px;
  //   background: linear-gradient(180deg, #faf9f6 0%, #ffffff 100%);
  background: linear-gradient(180deg, #9bb7a5 0%, #9bb7a5 100%);
  border-radius: 24px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.9s ease;
  margin-bottom: 30px;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Title = styled.h2`
  font-size: 38px;
  font-weight: 500;
  color: #1f2a24;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.9;
  color: #5f6f66;
`;

export const CTAButton = styled.button`
  margin: 24px auto 0;
  padding: 16px 44px;
  border-radius: 999px;

  background: #1f2a24;
  color: #ffffff;

  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  border: none;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: #0f1713;
    transform: translateY(-3px);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
  }
`;
