import styled from "styled-components";

export const Section = styled.section`
  padding: 96px 0;

  @media (max-width: 768px) {
    padding: 72px 0;
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Desc = styled.p`
  max-width: 560px;
  margin: 16px auto 48px;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const Points = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`;

export const Point = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    width: 24px;
    height: 1px;
    background: ${({ theme }) => theme.colors.borderLight};
    transform: translateX(-50%);
  }
`;

export const CTA = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
  padding: 14px 36px;
  border-radius: 999px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
`;
