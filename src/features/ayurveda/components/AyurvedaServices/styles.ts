import styled, { css } from "styled-components";

const surfaceCard = css`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(251, 249, 243, 0.98));
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
  font-size: clamp(1.72rem, 6.4vw, 3rem);
  line-height: 1.08;
`;

export const IncludesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 940px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const IncludesCard = styled(CardSection)`
  padding: 18px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
  background:
    radial-gradient(circle at right top, rgba(226, 235, 224, 0.38), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(249, 247, 241, 0.98));
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const Badge = styled.span<{ $warm?: boolean }>`
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $warm }) =>
    $warm ? "rgba(217, 184, 137, 0.14)" : "rgba(244, 250, 246, 0.98)"};
  color: ${({ theme, $warm }) =>
    $warm ? theme.colors.warmAccent : theme.colors.primary};
  border: 1px solid
    ${({ $warm }) =>
      $warm ? "rgba(217, 184, 137, 0.28)" : "rgba(122, 160, 143, 0.16)"};
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.06rem;
  line-height: 1.3;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(217, 184, 137, 0.14);
  color: #8b6736;
  border: 1px solid rgba(217, 184, 137, 0.28);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
`;

export const BulletItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.94);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`;

export const BulletIcon = styled.span<{ $warm?: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $warm }) =>
    $warm ? "rgba(217, 184, 137, 0.14)" : "rgba(244, 250, 246, 0.98)"};
  color: ${({ theme, $warm }) =>
    $warm ? theme.colors.warmAccent : theme.colors.primary};
  border: 1px solid
    ${({ $warm }) =>
      $warm ? "rgba(217, 184, 137, 0.28)" : "rgba(122, 160, 143, 0.16)"};
  margin-top: 1px;
`;

export const SupportingText = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;
`;
