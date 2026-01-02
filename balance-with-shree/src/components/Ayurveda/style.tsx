import { styled } from "styled-components";

export const Section = styled.section`
  padding: 120px 20px;
  background: linear-gradient(180deg, #f6fbf8, #eef6f1);
  opacity: 0.9;
  margin: 0 16px 16px 16px;
  border-radius: 24px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

export const Hero = styled.div`
  max-width: 720px;
  margin-bottom: 60px;
`;

export const Title = styled.h1`
  font-size: 44px;
  font-weight: 600;
  color: #183c2f;

  span {
    color: #2e6b55;
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #4f6f63;
  margin-top: 16px;
  line-height: 1.7;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 26px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #183c2f;
  margin-bottom: 12px;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #5a746a;
  line-height: 1.6;
`;

export const Process = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-top: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Step = styled.div`
  background: #ffffff;
  padding: 28px;
  border-radius: 22px;
  text-align: center;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
`;

export const StepNumber = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #2e6b55;
  margin-bottom: 12px;
`;

export const CTA = styled.a`
  display: inline-block;
  margin-top: 80px;
  padding: 18px 40px;
  border-radius: 999px;
  background: #1f5f4a;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 18px 45px rgba(31, 95, 74, 0.4);

  &:hover {
    transform: translateY(-2px);
  }
`;
