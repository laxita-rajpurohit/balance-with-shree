// src/styles/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [x: string]: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
      primary: string;
      secondary: string;
      bg: string;
      dark: string;
      muted: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    radius: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
