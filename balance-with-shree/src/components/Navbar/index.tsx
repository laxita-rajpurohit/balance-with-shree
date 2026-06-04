import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import { navigationCta, navigationItems } from "../../data/navigation";
import { siteMedia } from "../../data/media";
import {
  NavbarContainer,
  Logo,
  Nav,
  DesktopCta,
  MobileBar,
  MobileLogo,
  BurgerButton,
  BurgerLines,
  Overlay,
  Drawer,
  DrawerHeader,
  CloseButton,
  DrawerNav,
  DrawerCta,
  LinkReset,
  ItemLink,
  DrawerItemButton,
} from "./style";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <LinkReset>
        <NavbarContainer>
          <Logo
            src={siteMedia.brand.logo}
            alt="Logo"
          />
          <Nav>
            {navigationItems.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                <ItemLink>{link.label}</ItemLink>
              </NavLink>
            ))}
          </Nav>
          <DesktopCta>
            <Button to={navigationCta.to} size="sm" variant="secondary">
              {navigationCta.label}
            </Button>
          </DesktopCta>
        </NavbarContainer>

        <MobileBar>
          <MobileLogo
            src={siteMedia.brand.logo}
            alt="Logo"
          />
          <BurgerButton
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-site-drawer"
          >
            <BurgerLines />
          </BurgerButton>
        </MobileBar>

        <Overlay $open={open} onClick={() => setOpen(false)}>
          <Drawer
            id="mobile-site-drawer"
            $open={open}
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <DrawerHeader>
              <MobileLogo
                src={siteMedia.brand.logo}
                alt="Logo"
              />
              <p>Balance with Shree</p>
              <CloseButton
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </CloseButton>
            </DrawerHeader>

            <DrawerNav>
              {navigationItems.map((link) => (
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

            <DrawerCta>
              <Button
                to={navigationCta.to}
                fullWidth
                onClick={() => setOpen(false)}
              >
                {navigationCta.label}
              </Button>
            </DrawerCta>
          </Drawer>
        </Overlay>
      </LinkReset>
    </>
  );
};
