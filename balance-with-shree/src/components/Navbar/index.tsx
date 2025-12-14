// src/components/Navbar/index.tsx
import { useState } from "react";
import {
  NavbarContainer,
  Logo,
  Nav,
  Item,
  MobileBar,
  MobileLogo,
  BurgerButton,
  BurgerLines,
  Overlay,
  Drawer,
  DrawerHeader,
  CloseButton,
  DrawerNav,
  DrawerItem,
} from "./style";

const LINKS = ["HOME", "ABOUT", "RETREAT", "PACKAGES", "NUTRITION", "CONTACT"];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop navbar */}
      <NavbarContainer>
        <Logo src="/logo.png" alt="Logo" />
        <Nav>
          {LINKS.map((label) => (
            <Item key={label}>{label}</Item>
          ))}
        </Nav>
      </NavbarContainer>

      {/* Mobile bar + drawer */}
      <MobileBar>
        <MobileLogo src="/logo.png" alt="Logo" />
        <BurgerButton onClick={() => setOpen(true)}>
          <BurgerLines />
        </BurgerButton>
      </MobileBar>

      <Overlay $open={open} onClick={() => setOpen(false)}>
        <Drawer $open={open} onClick={(e) => e.stopPropagation()}>
          <DrawerHeader>
            <MobileLogo src="/logo.png" alt="Logo" />
            <CloseButton onClick={() => setOpen(false)}>✕</CloseButton>
          </DrawerHeader>

          <DrawerNav>
            {LINKS.map((label) => (
              <DrawerItem key={label} onClick={() => setOpen(false)}>
                {label}
              </DrawerItem>
            ))}
          </DrawerNav>
        </Drawer>
      </Overlay>
    </>
  );
};
