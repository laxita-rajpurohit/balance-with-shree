// Navbar.tsx
import { Item, Nav, NavbarContainer, Logo } from "./style";

export const Navbar = () => (
  <NavbarContainer>
    <Logo src="/logo.png" alt="Logo" />
    <Nav>
      <Item>HOME</Item>
      <Item>ABOUT</Item>
      <Item>RETREAT</Item>
      <Item>PACKAGES</Item>
      <Item>NUTRITION</Item>
      <Item>CONTACT</Item>
    </Nav>
  </NavbarContainer>
);
