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

export const SectionBody = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.64;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const DiscoverySection = styled(CardSection)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(234, 226, 214, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.97), rgba(228, 238, 221, 0.97));
  text-align: center;
`;

export const DiscoveryCard = styled.div`
  ${surfaceCard};
  max-width: 540px;
  margin: 18px auto 0;
  padding: 18px;
  box-shadow: 0 16px 30px rgba(15, 60, 40, 0.08);
`;

export const DiscoveryTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.24rem;
  line-height: 1.3;
`;

export const DiscoveryMeta = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.45;
`;

export const DiscoveryPrice = styled.div`
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;

  span {
    font-size: 1rem;
    vertical-align: top;
    margin-right: 4px;
  }
`;

export const DiscoveryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
  text-align: left;
`;

export const DiscoveryItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 11px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`;

export const DiscoveryAction = styled.div`
  margin-top: 16px;

  > * {
    width: 100%;
  }
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
