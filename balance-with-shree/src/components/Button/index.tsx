import type { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./style";


type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export const Button = ({ variant = "primary", children, ...rest }: ButtonProps) => (
  <StyledButton $variant={variant} {...rest}>
    {children}
  </StyledButton>
);
