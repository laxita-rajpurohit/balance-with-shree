import styled from "styled-components";
export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 40px;

  display: flex;
  justify-content: space-between; 
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  background: rgba(202, 255, 232, 0.9); /* light aquamarine tint */
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
`;


export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin: 0 auto;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 55px;
    height: 55px;
    object-fit: contain;
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  }
`;


export const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: #145c5a;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  transition: color 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #20b2aa, #66f1c2);
    border-radius: 999px;
    transition: width 0.25s ease, left 0.25s ease;
  }

  &:hover {
    color: #0f3d3e;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;


export const WhatsAppBtn = styled.a`
  padding: 10px 20px;
  border-radius: 999px;
  background: #20b2aa; /* teal-ish */
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;

  box-shadow: 0 4px 12px rgba(32, 178, 170, 0.35);
  transform: translateY(0);
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #1a928c;
    box-shadow: 0 6px 16px rgba(32, 178, 170, 0.45);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

// drawer styles stay the same…
export const DrawerWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-300px")};
  height: 100vh;
  width: 300px;
  background: #ffffff;
  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.15);
  transition: right 0.35s ease;
  z-index: 2000;
  overflow: hidden; /* keep bg inside */

  /* logo watermark */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%; /* tweak size */
    opacity: 0.06;       /* controls transparency */
    pointer-events: none; /* clicks pass through */
  }
`;

export const DrawerContent = styled.div`
  padding: 60px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const DrawerItem = styled.a`
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    color: #6e8efb;
    transform: translateX(8px);
  }
`;

export const CloseIcon = styled.div`
  font-size: 36px;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 20px;
  color: #333;
`;
