import styled from "styled-components";

export const Section = styled.section`
  padding: 0 0 84px;
  @media (max-width: 768px) {
    padding: 0 0 56px;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const GlassWrap = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  padding: 26px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    rgba(251, 249, 243, 0.94)
  );
  border-radius: 34px;
  border: 1px solid rgba(122, 160, 143, 0.14);
  box-shadow: 0 24px 60px rgba(15, 60, 40, 0.1);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    order: 2;
    padding: 6px 6px 2px;
  }
`;

export const Media = styled.div`
  border-radius: 26px;
  overflow: hidden;
  align-self: stretch;
  min-height: 100%;
  background: linear-gradient(180deg, rgba(244, 250, 246, 0.9), rgba(238, 246, 241, 0.94));

  @media (max-width: 900px) {
    order: 1;
    border-radius: 24px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 32%;
  min-height: 420px;

  @media (max-width: 900px) {
    min-height: 280px;
    object-position: center 22%;
  }
`;

export const Eyebrow = styled.span`
  font-size: 12px;
  letter-spacing: 2.4px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 14px;
`;

export const Heading = styled.h2`
  font-size: 36px;
  line-height: 1.15;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 29px;
    margin-bottom: 16px;
  }
`;

export const Description = styled.p`
  font-size: 15.8px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 22px;
  max-width: 520px;
`;

export const Offerings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

export const OfferingItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: start;
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
`;

export const OfferingIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(31, 95, 74, 0.08);
  color: ${({ theme }) => theme.colors.primary};
`;

export const OfferingTitle = styled.h4`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 6px;
`;

export const OfferingText = styled.p`
  font-size: 14.6px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`;
