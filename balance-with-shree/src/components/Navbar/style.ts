// style.ts
import styled from "styled-components";

export const NavbarContainer = styled.header`
  width: 100%;
  padding: 20px 0 0;
  display: flex;
  flex-direction: column;   /* logo above nav */
  align-items: center;      /* center horizontally */
  gap: 16px;                /* space between logo and nav */
`;

export const Logo = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const Item = styled.a`
  font-size: 14px;
  letter-spacing: 0.12em;
  cursor: pointer;
`;
