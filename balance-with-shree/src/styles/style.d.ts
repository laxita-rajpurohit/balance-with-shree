import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bg: string;
      dark: string;
      muted: string;
      white: string;
      ivory: string;
      textPrimary: string;
      textSecondary: string;
      textMuted: string;
      textWhite: string;
      backgroundSoft: string;
      backgroundLight: string;
      bgPrimary: string;
      bgSecondary: string;
      borderLight: string;
      primaryActive: string;
      primaryActiveLight: string;
      primaryActiveLightest: string;
      warmAccent: string;
    };
    fonts: {
      heading: string;
      body: string;
      accent: string;
    };
    spacing: {
      xsmall: string;
      small: string;
      base: string;
      medium: string;
      large: string;
      xlarge: string;
      section: string;
    };
    radius: {
      small: string;
      medium: string;
      large: string;
      xl: string;
      pill: string;
    };
    shadows: {
      card: string;
      soft: string;
      button: string;
    };
  }
}
