import styled from "styled-components";
import { ProgramCard } from "../ui/primitives";

export const Section = styled.section`
  padding: 42px 0 72px;
  @media (max-width: 768px) {
    padding: 28px 0 52px;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const GlassWrap = styled.div`
  width: 100%;
  max-width: 980px;
  text-align: center;
  padding: 20px 0 0;

  @media (max-width: 768px) {
    text-align: left;
    padding: 10px 0 0;
  }
`;

export const PackagesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 32px;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    gap: 12px;
    margin-top: 24px;
    padding-bottom: 8px;
    scroll-snap-type: x proximity;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const PackageCard = styled(ProgramCard)`
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 92px;
  padding: 22px;
  text-align: left;

  @media (max-width: 768px) {
    min-width: 220px;
    min-height: 84px;
    padding: 18px;
    border-radius: 24px;
    scroll-snap-align: start;
  }
`;

export const PackageIcon = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(31, 95, 74, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

export const PackageLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
