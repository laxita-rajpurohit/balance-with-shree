import styled from "styled-components";

export const Section = styled.section`
  padding: 140px 24px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const GlassWrap = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 64px;

  padding: 64px;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-radius: 36px;

  box-shadow: 0px 40px 80px rgba(15, 60, 40, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 48px 28px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Media = styled.div`
  border-radius: 28px;
  overflow: hidden;
  align-self: stretch;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Eyebrow = styled.span`
  font-size: 12px;
  letter-spacing: 2.4px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 14px;
`;

export const Heading = styled.h2`
  font-size: 38px;
  line-height: 1.15;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 15.8px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 36px;
  max-width: 520px;
`;

export const Offerings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

export const OfferingItem = styled.div`
  padding-left: 18px;
  border-left: 2px solid rgba(15, 60, 40, 0.18);
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

export const CTAButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
