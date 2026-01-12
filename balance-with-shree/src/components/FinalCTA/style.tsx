import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 24px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.bgSecondary} 0%,
    ${({ theme }) => theme.colors.bgPrimary} 100%
  );
`;

export const Container = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const Primary = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
  padding: 16px 40px;
  border-radius: 999px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`;

export const Secondary = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  padding: 16px 40px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
