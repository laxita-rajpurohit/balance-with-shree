import styled from "styled-components";

/* =====================
   SECTION
===================== */

export const Section = styled.section`
  padding: 120px 24px;
  background: radial-gradient(
    80% 120% at 50% -20%,
    rgba(217, 154, 66, 0.08),
    transparent 60%
  );
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

/* =====================
   HEADER
===================== */

export const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 12px;
`;

export const SubTitle = styled.p`
  max-width: 640px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

/* =====================
   PLANS GRID
===================== */

export const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* =====================
   PLAN CARD
===================== */

export const PlanCard = styled.div<{ $highlight?: boolean }>`
  position: relative;
  border-radius: 28px;
  padding: 32px 28px 36px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.55),
    rgba(255, 255, 255, 0.25)
  );
  backdrop-filter: blur(22px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.6);

  box-shadow: 0 30px 80px rgba(6, 51, 54, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);

  transform: ${({ $highlight }) => ($highlight ? "translateY(-12px)" : "none")};

  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: ${({ $highlight }) =>
      $highlight ? "translateY(-16px)" : "translateY(-6px)"};
  }
`;

export const HighlightBadge = styled.div`
  position: absolute;
  top: -14px;
  right: 24px;

  background: ${({ theme }) => theme.colors.primaryActive};
  color: white;

  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
`;

/* =====================
   TEXT
===================== */

export const PlanName = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 12px;
`;

export const Price = styled.div`
  font-size: 34px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;

  span {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 4px;
  }
`;

/* =====================
   CTA
===================== */

export const CTAButton = styled.button`
  position: relative;
  width: 100%;
  padding: 14px 18px;
  border-radius: 999px;

  /* Frosted white glass */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.45)
  );
  backdrop-filter: blur(16px) saturate(120%);
  -webkit-backdrop-filter: blur(16px) saturate(120%);

  /* Elegant border */
  border: 1px solid rgba(255, 255, 255, 0.65);

  /* Subtle depth */
  box-shadow: 0 14px 36px rgba(6, 51, 54, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);

  /* Typography */
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.textPrimary};

  cursor: pointer;

  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), background 0.45s ease;

  /* Soft glass highlight */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      120% 80% at 30% 0%,
      rgba(255, 255, 255, 0.55),
      transparent 60%
    );
    opacity: 0.6;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 48px rgba(6, 51, 54, 0.22),
      inset 0 1px 0 rgba(255, 255, 255, 0.85);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 10px 26px rgba(6, 51, 54, 0.18);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(6, 51, 54, 0.15),
      0 18px 44px rgba(6, 51, 54, 0.22);
  }
`;

/* =====================
   FEATURES
===================== */

export const Features = styled.ul`
  list-style: none;
  margin-top: 28px;
  padding: 0;
  display: grid;
  gap: 14px;
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    color: ${({ theme }) => theme.colors.primaryActive};
  }
`;

/* =====================
   BILLING TOGGLE
===================== */

export const ToggleWrap = styled.div`
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  gap: 14px;

  padding: 8px 14px;
  border-radius: 999px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.55),
    rgba(255, 255, 255, 0.25)
  );
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.5);

  box-shadow: 0 14px 40px rgba(6, 51, 54, 0.15);
`;

export const ToggleLabel = styled.span<{ $active?: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.textPrimary : theme.colors.textMuted};

  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const Toggle = styled.button<{ $active?: boolean }>`
  width: 46px;
  height: 26px;
  border-radius: 999px;
  position: relative;

  background: ${({ theme, $active }) =>
    $active ? theme.colors.primaryActive : "rgba(0,0,0,0.2)"};

  border: none;
  cursor: pointer;
  transition: all 0.4s ease;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({ $active }) => ($active ? "23px" : "3px")};

    width: 20px;
    height: 20px;
    border-radius: 50%;

    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const SaveBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;

  background: ${({ theme }) => theme.colors.primaryActiveLight};
  color: ${({ theme }) => theme.colors.primaryActive};
`;
