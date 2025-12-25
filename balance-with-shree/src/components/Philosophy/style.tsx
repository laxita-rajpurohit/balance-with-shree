import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 20px;
  background: #faf9f6;
  border-radius: 24px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Label = styled.span`
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #9bb7a5;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #1f2a24;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Divider = styled.div`
  width: 48px;
  height: 2px;
  background: #9bb7a5;
  margin: 12px auto;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.9;
  color: #5f6f66;
`;
