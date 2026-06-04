import styled from "styled-components";

export const FloatingButton = styled.a`
  position: fixed;
  right: 18px;
  bottom: max(14px, env(safe-area-inset-bottom));
  width: 58px;
  height: 58px;
  background: linear-gradient(180deg, #1f5f4a 0%, #1a513f 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.68);
  box-shadow: 0 18px 36px rgba(31, 95, 74, 0.28);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 40px rgba(31, 95, 74, 0.34);
  }

  &:hover span {
    opacity: 1;
    transform: translateX(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(31, 95, 74, 0.14),
      0 0 0 1px rgba(31, 95, 74, 0.68);
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: max(18px, calc(env(safe-area-inset-bottom) + 8px));
    width: 50px;
    height: 50px;
    box-shadow: 0 14px 24px rgba(31, 95, 74, 0.22);
  }
`;

export const Hint = styled.span`
  position: absolute;
  right: 74px;
  background: #ffffff;
  color: #1f5f4a;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  white-space: nowrap;

  opacity: 0;
  transform: translateX(6px);
  transition: all 0.3s ease;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    display: none;
  }
`;
