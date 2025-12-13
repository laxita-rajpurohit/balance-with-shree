import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Cormorant Garamond', serif;
   background: ${({ theme }) => theme.colors.bg};
   color: ${({ theme }) => theme.colors.dark};
  }

  p {
    font-family: 'Inter', sans-serif;
   color: ${({ theme }) => theme.colors.muted};
  }
`;
