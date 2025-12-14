import styled from "styled-components";

/* desktop navbar */
export const NavbarContainer = styled.header`
  width: 100%;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  @media (max-width: 767px) {
    display: none; /* hide desktop on mobile */
  }
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

/* mobile navbar + drawer */
export const MobileBar = styled.header`
  width: 100%;
  padding: 12px 18px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e1f1eb;

  @media (min-width: 768px) {
    display: none; /* hide mobile bar on desktop */
  }
`;

export const MobileLogo = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: contain;
   border-radius: 50%;
  object-fit: contain;
  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.22),
    0 0 0 4px rgba(244, 255, 252, 0.9);
`;

export const BurgerButton = styled.button`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: none;
  background: rgba(248, 255, 252, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;
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
  background: #f8fffc;
  box-shadow: 12px 0 40px rgba(0, 0, 0, 0.25);
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? "0" : "-100%")});
 transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);

`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
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
  gap: 22px;
`;

export const DrawerItem = styled.button`
  border: none;
  background: transparent;
  text-align: left;
  font-size: 15px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #264139;
  padding: 4px 0;
  cursor: pointer;
`;
