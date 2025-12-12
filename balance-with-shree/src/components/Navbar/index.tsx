import { useState } from "react";
import {
  Nav,
  Logo,
  Menu,
  MenuItem,
  WhatsAppBtn,
  MobileMenuIcon,
  MainDiv,
} from "./style";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <MainDiv>
          <Logo href="#home">
            <img src="/logo.JPG" alt="Balance With Shree" />
          </Logo>

          <Menu>
            <MenuItem as="a" href="#home">
              Home
            </MenuItem>
            <MenuItem as="a" href="#about">
              About
            </MenuItem>
            <MenuItem as="a" href="#programs">
              Programs
            </MenuItem>
            <MenuItem as="a" href="#contact">
              Contact
            </MenuItem>
          </Menu>
        </MainDiv>

        <WhatsAppBtn href="https://wa.me/91XXXXXXXXXX" target="_blank">
          WhatsApp
        </WhatsAppBtn>

        <MobileMenuIcon onClick={() => setOpen(true)}>☰</MobileMenuIcon>
      </Nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
