import { createGlobalStyle } from "styled-components";
import leafRight from "../assets/leaf.svg";
import leafLeft from "../assets/right leaf.svg";

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
   .page {
   position: relative;
 }

.site-wrapper {
 min-height: 100vh;

}
 /* 🌿 Base leaf styles */
.leaf-background {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;

  background-repeat: no-repeat;
  // background-size: 520px auto;

  opacity: 0.40;
  pointer-events: none;
  z-index: 0;
  will-change: transform;
}

/* 🌿 Right leaf */
.leaf-right {
  left: 0;
  background-image: url(${leafRight});
  background-position: right -10px center;
}

/* 🌿 Left leaf */
.leaf-left {
  left: 0;
  background-image: url(${leafLeft});
  background-position: left -10px center;
}


`;
