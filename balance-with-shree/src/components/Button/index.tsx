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
    return (
      <StyledLink
        as={Link}
        to={rest.to}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...rest}
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
    return (
      <StyledLink
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...rest}
      >
        <ButtonContent
          icon={icon}
          iconPosition={iconPosition}
          children={children}
        />
      </StyledLink>
    );
  }

  return (
    <StyledButton
      type={rest.type ?? "button"}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...rest}
    >
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        children={children}
      />
    </StyledButton>
  );
};
