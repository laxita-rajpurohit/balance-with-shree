import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin-top: 120px;
  padding: 48px 28px 36px;

  background: linear-gradient(to bottom, rgba(238, 244, 241, 0.4), #eef4f1);

  border-top: 1px solid rgba(20, 60, 40, 0.06);
`;

export const FooterContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 18px;
    text-align: center;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Logo = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2a3a32;
`;

export const Tagline = styled.div`
  font-size: 13px;
  color: #6c7c73;
`;

export const LegalRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const TextLink = styled.a`
  font-size: 13px;
  color: #6c7c73;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const IconLink = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);

  border: 1px solid rgba(20, 60, 40, 0.06);
  color: #2a3a32;

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  }
`;
