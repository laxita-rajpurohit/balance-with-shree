import styled, { css } from "styled-components";

const surfaceCard = css`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

export const CardSection = styled.section`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.78rem, 6.8vw, 3rem);
  line-height: 1.08;
`;

export const SectionBody = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.68;
  }
`;

export const PricingSection = styled(CardSection)`
  background:
    radial-gradient(circle at top center, rgba(217, 184, 137, 0.08), transparent 38%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 250, 246, 0.96));
`;

export const PricingHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 18px;
`;

export const BillingToggle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  margin-top: 16px;
  border-radius: 999px;
  background: rgba(244, 250, 246, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.16);
`;

export const BillingOption = styled.button<{ $active: boolean }>`
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.textWhite : theme.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

export const BillingBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 2px 8px;
  background: rgba(31, 95, 74, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
  font-weight: 600;
  margin-left: 6px;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const PricingCard = styled.div<{ $highlight?: boolean }>`
  ${surfaceCard};
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: ${({ $highlight }) =>
    $highlight
      ? "0 22px 42px rgba(15, 60, 40, 0.12)"
      : "0 14px 28px rgba(15, 60, 40, 0.07)"};
  border-color: ${({ $highlight }) =>
    $highlight ? "rgba(31, 95, 74, 0.2)" : "rgba(122, 160, 143, 0.12)"};
`;

export const PlanName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.16rem;
  line-height: 1.3;
`;

export const PlanPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OriginalPrice = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  text-decoration: line-through;
`;

export const PlanPrice = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;

  span {
    display: block;
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
  }
`;

export const PlanMeta = styled.p`
  margin: -2px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.45;
`;

export const SessionChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SessionChip = styled.button<{ $active: boolean }>`
  border-radius: 999px;
  border: 1px solid ${({ theme, $active }) =>
    $active ? theme.colors.primary : "rgba(122, 160, 143, 0.18)"};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primaryActiveLightest : "rgba(255, 255, 255, 0.92)"};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 9px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(31, 95, 74, 0.12),
      0 0 0 1px rgba(31, 95, 74, 0.68);
  }
`;

export const PlanButtonWrap = styled.div`
  margin-top: 2px;
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlanFeature = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.52;
`;

export const PlanFeatureIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  margin-top: 1px;
`;
