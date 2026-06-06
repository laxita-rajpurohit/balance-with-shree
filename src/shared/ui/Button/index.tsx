import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { IconWrap, StyledButton, StyledLink } from "./style";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
};

type LinkButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    to?: never;
  };

type RouteButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    to: string;
    href?: never;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    to?: never;
  };

type ButtonProps = LinkButtonProps | RouteButtonProps | NativeButtonProps;

const ButtonContent = ({
  children,
  icon,
  iconPosition = "left",
}: Pick<SharedProps, "children" | "icon" | "iconPosition">) => (
  <>
    {icon ? <IconWrap $position={iconPosition}>{icon}</IconWrap> : null}
    <span>{children}</span>
  </>
);

export const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  children,
  ...rest
}: ButtonProps) => {
  if ("to" in rest && rest.to) {
    const { to, ...linkProps } = rest;

    return (
      <StyledLink
        as={Link}
        to={to}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...linkProps}
      >
        <ButtonContent
          icon={icon}
          iconPosition={iconPosition}
          children={children}
        />
      </StyledLink>
    );
  }

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest;

    return (
      <StyledLink
        href={href}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...anchorProps}
      >
        <ButtonContent
          icon={icon}
          iconPosition={iconPosition}
          children={children}
        />
      </StyledLink>
    );
  }

  const { type = "button", ...buttonProps } = rest as NativeButtonProps;

  return (
    <StyledButton
      type={type}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...buttonProps}
    >
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        children={children}
      />
    </StyledButton>
  );
};
