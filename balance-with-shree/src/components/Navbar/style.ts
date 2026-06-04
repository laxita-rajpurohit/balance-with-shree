import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* desktop navbar */
export const NavbarContainer = styled.header`
  width: 100%;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22),
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

export const DesktopCta = styled.div`
  display: flex;
  justify-content: center;
`;

/* IMPORTANT: NavLink instead of <a> */
export const Item = styled(NavLink)`
  position: relative;
  font-size: 13px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  cursor: pointer;
  color: #264139;
  padding-bottom: 6px;
  transition: color 200ms ease, transform 200ms ease, opacity 200ms ease;
  opacity: 0.8;
  text-decoration: none;

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

  /* active route */
  &.active {
    color: #1f6b57;
    opacity: 1;
  }

  &.active::after {
    width: 70%;
  }
`;

/* mobile navbar + drawer */
export const MobileBar = styled.header`
  width: 100%;
  padding: calc(env(safe-area-inset-top) + 8px) 16px 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  background: rgba(236, 245, 240, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(31, 95, 74, 0.08);
  box-shadow: 0 8px 20px rgba(15, 60, 40, 0.05);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileLogo = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(244, 255, 252, 0.9);
`;

export const BurgerButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: none;
  background: rgba(248, 255, 252, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-50%) translateY(-1px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
  }
`;

export const BurgerLines = styled.span`
  position: relative;
  width: 18px;
  height: 2px;
  background: #264139;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 18px;
    height: 2px;
    background: #264139;
  }

  &::before {
    top: -5px;
  }
  &::after {
    top: 5px;
  }
`;

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  z-index: 80;
  display: flex;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 600ms ease-out;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Drawer = styled.aside<{ $open: boolean }>`
  width: 78%;
  max-width: 320px;
  height: 100%;
  background: linear-gradient(180deg, rgba(248, 255, 252, 0.98), rgba(238, 246, 241, 0.98));
  box-shadow: 12px 0 40px rgba(0, 0, 0, 0.25);
  padding: 22px 22px 28px;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? "0" : "-100%")});
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  p {
    font-size: 18px;
    line-height: 1.05;
    margin-right: 35px;
    color: #264139;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: #264139;
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ItemLink = styled.span`
  position: relative;
  font-size: 13px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  cursor: pointer;
  color: #264139;
  padding-bottom: 6px;
  transition: color 200ms ease, transform 200ms ease, opacity 200ms ease;
  opacity: 0.8;
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
export const DrawerItemButton = styled.span`
  border: none;
  background: transparent;
  text-align: left;
  font-size: 15px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #264139;
  padding: 8px 0;
  cursor: pointer;
`;

export const DrawerCta = styled.div`
  margin-top: 28px;
`;

export const LinkReset = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }

  a.active ${ItemLink} {
    color: #1f6b57;
    opacity: 1;
  }

  a.active ${ItemLink}::after {
    width: 70%;
  }

  a.active ${DrawerItemButton} {
    color: #1f6b57;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 120;
  }
`;
