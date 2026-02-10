import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: sticky;
  bottom: 0;
  width: 100%;

  background: #eef4f1;
  border-top: 1px solid rgba(20, 60, 40, 0.08);

  padding: 18px 28px;
  z-index: 50;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #2a3a32;
`;

export const Tagline = styled.div`
  font-size: 12.5px;
  color: #6c7c73;
`;

export const LegalRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`;

export const TextLink = styled.a`
  font-size: 13px;
  color: #6c7c73;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
`;

export const IconLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;
  border: 1px solid rgba(20, 60, 40, 0.08);

  color: #2a3a32;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  }
`;
