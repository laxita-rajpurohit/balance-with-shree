// src/components/ui/Button/style.ts
import styled, { css } from "styled-components";

const baseStyles = css`
  padding: 12px 26px;
  border-radius: 40px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border: 1px solid transparent;
  transition:
    background 180ms ease,
    color 180ms ease,
    box-shadow 180ms ease,
    transform 160ms ease;

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    font-size: 12px;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledButton = styled.button<{ $variant: "primary" | "secondary" }>`
  ${baseStyles};

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          background: #2f4f4f;
          color: #ffffff;
          box-shadow: 0 14px 26px rgba(0, 0, 0, 0.2);

          &:hover {
            background: #264241;
            box-shadow: 0 18px 32px rgba(0, 0, 0, 0.26);
          }
        `
      : css`
          background: transparent;
          color: #2f4f4f;
          border-color: rgba(47, 79, 79, 0.35);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(6px);

          &:hover {
            background: rgba(248, 255, 252, 0.9);
            border-color: rgba(47, 79, 79, 0.6);
            box-shadow: 0 16px 30px rgba(0, 0, 0, 0.2);
          }
        `};
`;
