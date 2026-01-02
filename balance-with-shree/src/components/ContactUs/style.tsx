import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 20px;
  background: linear-gradient(180deg, #f4faf6 0%, #eef6f1 100%);
  opacity: 0.9;
  margin: 0 16px 16px 16px;
  border-radius: 24px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

export const Header = styled.div`
  max-width: 700px;
  margin-bottom: 70px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #183c2f;

  span {
    font-style: italic;
    color: #2e6b55;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #4f6f63;
  margin-top: 16px;
  line-height: 1.7;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 28px;
  padding: 36px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  color: #183c2f;
  margin-bottom: 12px;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #5a746a;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 0.15),
    transparent
  );
  margin: 24px 0;
`;

export const WhatsAppCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;

  background: #1f5f4a;
  color: white;
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  box-shadow: 0 16px 40px rgba(31, 95, 74, 0.35);
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid #d6e3dc;
  font-size: 15px;
`;

export const Textarea = styled.textarea`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid #d6e3dc;
  font-size: 15px;
  min-height: 120px;
  resize: vertical;
`;

export const Submit = styled.button`
  margin-top: 12px;
  padding: 14px;
  background: transparent;
  border: 1px solid #1f5f4a;
  color: #1f5f4a;
  border-radius: 999px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #1f5f4a;
    color: white;
  }
`;
