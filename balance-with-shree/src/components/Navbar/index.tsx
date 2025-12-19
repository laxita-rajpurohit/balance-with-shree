import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarContainer,
  Logo,
  Nav,
  MobileBar,
  MobileLogo,
  BurgerButton,
  BurgerLines,
  Overlay,
  Drawer,
  DrawerHeader,
  CloseButton,
  DrawerNav,
  LinkReset,
  ItemLink,
  DrawerItemButton,
} from "./style";

const LINKS = [
  { label: "HOME", to: "/" },
  { label: "NUTRITION", to: "/nutrition" },
  { label: "YOGA", to: "/yoga" },
  { label: "AYURVEDA", to: "/ayurveda" },
  { label: "PACKAGES", to: "/packages" },
  { label: "CONTACT", to: "/contact" },
  { label: "ABOUT", to: "/about" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LinkReset>
        <NavbarContainer>
          <Logo src="/logo.png" alt="Logo" />
          <Nav>
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                <ItemLink>{link.label}</ItemLink>
              </NavLink>
            ))}
          </Nav>
        </NavbarContainer>

        <MobileBar>
          <MobileLogo src="/logo.png" alt="Logo" />
          <BurgerButton onClick={() => setOpen(true)} aria-label="Open menu">
            <BurgerLines />
          </BurgerButton>
        </MobileBar>

        <Overlay $open={open} onClick={() => setOpen(false)}>
          <Drawer $open={open} onClick={(e) => e.stopPropagation()}>
            <DrawerHeader>
              <MobileLogo src="/logo.png" alt="Logo" />
              <h1>Balance with Shree</h1>
              <CloseButton
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </CloseButton>
            </DrawerHeader>

            <DrawerNav>
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                >
                  <DrawerItemButton>{link.label}</DrawerItemButton>
                </NavLink>
              ))}
            </DrawerNav>
          </Drawer>
        </Overlay>
      </LinkReset>
    </>
  );
};
