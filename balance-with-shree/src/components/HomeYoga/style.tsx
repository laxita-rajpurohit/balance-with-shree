import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 24px;
  background: #fcfbff;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 72px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.span`
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 600;
  color: #6b8f7f;
`;

export const Title = styled.h2`
  font-size: 34px;
  line-height: 1.2;
  font-weight: 600;
  color: #1f3d2b;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: #2b2a29;
  opacity: 0.85;
  max-width: 520px;
`;

export const Offerings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 8px;
`;

export const Offering = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    font-size: 15.5px;
    font-weight: 600;
    color: #24312d;
  }

  span {
    font-size: 14.5px;
    color: #2b2a29;
    opacity: 0.8;
  }
`;

export const CTAButton = styled.button`
  margin-top: 28px;
  align-self: flex-start;
`;

export const ImageWrapper = styled.div`
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0px 30px 60px rgba(15, 60, 40, 0.18);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
