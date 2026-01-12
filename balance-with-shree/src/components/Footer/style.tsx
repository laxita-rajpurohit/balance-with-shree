import styled from "styled-components";

/* ===== DESKTOP FOOTER ===== */

export const FooterWrapper = styled.footer<{ $visible: boolean }>`
  position: relative;
  margin-top: auto;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(20px)"};

  transition: all 0.6s ease;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  border-top: 1px solid rgba(15, 60, 40, 0.12);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  font-size: 15.5px;
  font-weight: 600;
  color: #1f2a24;
`;

export const Tagline = styled.div`
  font-size: 13px;
  color: #5f6f66;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const IconRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const IconLink = styled.a`
  color: #1f2a24;
  opacity: 0.8;
  transition: 0.25s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

export const LegalRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const TextLink = styled.a`
  font-size: 12.5px;
  color: #5f6f66;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/* ===== MOBILE BOTTOM BAR ===== */

export const MobileBar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 56px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(14px);

    border-top: 1px solid rgba(15, 60, 40, 0.12);
    z-index: 60;

    justify-content: space-around;
    align-items: center;
  }
`;

export const MobileIcon = styled.a`
  color: #1f2a24;
  opacity: 0.85;
  transition: 0.2s ease;

  &:active {
    transform: scale(0.9);
  }
`;
