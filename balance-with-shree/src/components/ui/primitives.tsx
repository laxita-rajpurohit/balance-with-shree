import styled, { css } from "styled-components";
import type { ReactNode } from "react";

export const PageShell = styled.div`
  margin: 0 20px;
`;

export const Section = styled.section<{ $tone?: "transparent" | "soft" | "ivory" }>`
  ${({ $tone = "transparent", theme }) => {
    if ($tone === "soft") {
      return css`
        background: linear-gradient(180deg, ${theme.colors.bgPrimary} 0%, ${theme.colors.bgSecondary} 100%);
        border: 1px solid ${theme.colors.borderLight};
        border-radius: ${theme.radius.xl};
      `;
    }

    if ($tone === "ivory") {
      return css`
        background: rgba(255, 255, 255, 0.86);
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: ${theme.radius.xl};
      `;
    }

    return css``;
  }}
`;

export const Container = styled.div<{ $narrow?: boolean }>`
  width: min(100%, ${({ $narrow }) => ($narrow ? "840px" : "1100px")});
  margin: 0 auto;
`;

export const Card = styled.div<{ $tone?: "default" | "soft"; $padding?: "md" | "lg" }>`
  ${({ theme, $tone = "default", $padding = "lg" }) => css`
    background: ${$tone === "soft"
      ? "linear-gradient(180deg, rgba(255,255,255,0.82), rgba(244,250,246,0.92))"
      : "rgba(255, 255, 255, 0.92)"};
    border: 1px solid ${theme.colors.borderLight};
    border-radius: ${theme.radius.xl};
    padding: ${$padding === "lg" ? "32px" : "24px"};
    box-shadow: ${theme.shadows.card};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  `}
`;

export const FeatureCard = styled(Card)``;
export const ProgramCard = styled(Card)``;
export const TestimonialCard = styled(Card)``;
export const PackageCard = styled(Card)``;
export const ContactActionCard = styled(Card)``;
export const BotanicalFrame = styled(Card)`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at top right, rgba(122, 160, 143, 0.12), transparent 42%);
  }
`;

const HeadingWrap = styled.div<{ $align?: "left" | "center" }>`
  text-align: ${({ $align = "left" }) => $align};
  max-width: 720px;
  margin: ${({ $align = "left" }) =>
    $align === "center" ? "0 auto" : "0"};
`;

const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const HeadingTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.08;
`;

const HeadingDescription = styled.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textMuted};
`;

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeadingProps) => (
  <HeadingWrap $align={align}>
    {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
    <HeadingTitle as={as}>{title}</HeadingTitle>
    {description ? <HeadingDescription>{description}</HeadingDescription> : null}
  </HeadingWrap>
);
