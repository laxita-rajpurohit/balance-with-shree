import styled from "styled-components";

export const FloatingButton = styled.a`
  position: fixed;
  right: 22px;
  bottom: 22px;
  width: 56px;
  height: 56px;
  background: #1f5f4a;
  color: white;
  border-radius: 50%;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 1000;

  box-shadow: 0 14px 35px rgba(31, 95, 74, 0.45);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  &:hover span {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Hint = styled.span`
  position: absolute;
  right: 70px;
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
`;
