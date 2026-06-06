import styled, { css } from "styled-components";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

const sizeStyles = {
  sm: css`
    min-height: 42px;
    padding: 10px 18px;
    font-size: 13px;
  `,
  md: css`
    min-height: 46px;
    padding: 12px 24px;
    font-size: 14px;
  `,
  lg: css`
    min-height: 52px;
    padding: 14px 28px;
    font-size: 15px;
  `,
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.button};

    &:hover {
      background: #184d3b;
      border-color: #184d3b;
      box-shadow: 0 20px 42px rgba(31, 95, 74, 0.3);
    }
  `,
  secondary: css`
    background: rgba(255, 255, 255, 0.88);
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: rgba(122, 160, 143, 0.42);
    box-shadow: ${({ theme }) => theme.shadows.soft};

    &:hover {
      background: ${({ theme }) => theme.colors.ivory};
      border-color: rgba(122, 160, 143, 0.58);
    }
  `,
  outline: css`
    background: rgba(255, 255, 255, 0.18);
    color: ${({ theme }) => theme.colors.primary};
    border-color: rgba(31, 95, 74, 0.28);

    &:hover {
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(31, 95, 74, 0.46);
    }
  `,
};

const baseStyles = css<{
  $variant: Variant;
  $size: Size;
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid transparent;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: none;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 180ms ease,
    color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 160ms ease;
  -webkit-tap-highlight-color: transparent;

  ${({ $size }) => sizeStyles[$size]};
  ${({ $variant }) => variantStyles[$variant]};

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px ${({ theme }) => theme.colors.primaryActiveLightest},
      0 0 0 1px ${({ theme }) => theme.colors.primaryActive};
  }

  &:disabled {
    opacity: 0.68;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const StyledButton = styled.button<{
  $variant: Variant;
  $size: Size;
  $fullWidth?: boolean;
}>`
  ${baseStyles}
`;

export const StyledLink = styled.a<{
  $variant: Variant;
  $size: Size;
  $fullWidth?: boolean;
}>`
  ${baseStyles}
`;

export const IconWrap = styled.span<{ $position: "left" | "right" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  order: ${({ $position }) => ($position === "right" ? 2 : 0)};
`;

