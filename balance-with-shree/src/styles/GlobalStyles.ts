import { createGlobalStyle } from "styled-components";
import leafRight from "../assets/left leaf.svg";
import leafLeft from "../assets/right leaf.svg";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.dark};
    line-height: 1.5;
    text-rendering: optimizeLegibility;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.muted};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.textPrimary};
    letter-spacing: 0;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  a {
    color: inherit;
  }

  img,
  video {
    display: block;
    max-width: 100%;
  }

  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primaryActive};
    outline-offset: 2px;
  }
  .page {
    position: relative;
  }

  .site-wrapper {
    min-height: 100vh;
  }

  .leaf-background {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: min(36vw, 520px) auto;
    opacity: var(--leaf-opacity, 0.32);
    pointer-events: none;
    z-index: 0;
    will-change: transform;
  }

  .leaf-right {
    left: 0;
    background-image: url(${leafRight});
    background-position: right -10px center;
  }

  .leaf-left {
    left: 0;
    background-image: url(${leafLeft});
    background-position: left -10px center;
  }

  .content {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .leaf-background {
      height: 100vh;
      background-size: min(82vw, 420px) auto;
      opacity: var(--leaf-mobile-opacity, 0.22);
    }

    .leaf-right {
      background-position: right -40px top 120px;
      top: -8%;
    }

    .leaf-left {
      background-position: left -40px bottom 160px;
      top: 21%;
    }
  }

`;
