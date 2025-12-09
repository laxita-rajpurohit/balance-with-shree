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

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;
`;

export const Logo = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  color: #2c3e50;
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
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: #333;

  transition: 0.3s;

  &:hover {
    color: #6e8efb;
  }
`;

export const WhatsAppBtn = styled.a`
  padding: 10px 18px;
  border-radius: 8px;
  background: #25d366;
  color: white;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;

  transition: 0.3s;

  &:hover {
    background: #1ea955;
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

// ===== MOBILE DRAWER =====

export const DrawerWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-300px")};
  height: 100vh;
  width: 300px;
  background: white;

  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.15);
  transition: right 0.35s ease;
  z-index: 2000;
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