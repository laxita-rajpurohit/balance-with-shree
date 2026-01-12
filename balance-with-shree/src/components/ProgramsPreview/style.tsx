import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 24px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const GlassWrap = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;

  padding: 64px 56px;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-radius: 36px;

  box-shadow: 0px 40px 80px rgba(15, 60, 40, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);

  @media (max-width: 768px) {
    padding: 48px 24px;
  }
`;

export const Heading = styled.h2`
  font-size: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const SubText = styled.p`
  max-width: 580px;
  margin: 0 auto 48px;
  font-size: 15.5px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const PackagesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  flex-wrap: wrap;
`;

export const PackageButton = styled.button`
  padding: 14px 30px;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(6px);

  border: 1px solid rgba(15, 60, 40, 0.18);

  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};

  cursor: default;

  box-shadow: 0px 12px 30px rgba(15, 60, 40, 0.12);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 18px 40px rgba(15, 60, 40, 0.18);
  }
`;
