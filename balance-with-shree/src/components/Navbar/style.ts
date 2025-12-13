import styled from "styled-components";

export const NavbarContainer = styled.header`
  width: 100%;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const Logo = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(244, 255, 252, 0.9);
`;

export const Nav = styled.nav`
  padding: 10px 40px;
  border-radius: 999px;
  background: rgba(248, 255, 252, 0.9);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 36px;
`;

export const Item = styled.a`
  position: relative;
  font-size: 13px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  cursor: pointer;
  color: #264139;
  padding-bottom: 6px;
  transition:
    color 200ms ease,
    transform 200ms ease,
    opacity 200ms ease;

  /* subtle default dim so hover feels intentional */
  opacity: 0.8;

  /* animated gradient underline + glow */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #1f6b57, #52a08a);
    transform: translateX(-50%);
    transition: width 220ms ease;
  }

  &:hover {
    color: #1f6b57;
    opacity: 1;
    transform: translateY(-2px);
  }

  &:hover::after {
    width: 70%;
  }
`;
