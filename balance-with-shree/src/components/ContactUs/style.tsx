import styled, { createGlobalStyle } from "styled-components";
import {
  Card as BaseCard,
  Container as BaseContainer,
  Section as BaseSection,
} from "../ui/primitives";

export const Section = styled(BaseSection)`
  padding: 120px 20px;
  background: linear-gradient(180deg, #f4faf6 0%, #eef6f1 100%);
  opacity: 0.9;
  margin: 0 16px 16px 16px;
  border-radius: 24px;
`;

export const Container = styled(BaseContainer)`
  width: min(100%, 1100px);
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

export const Card = styled(BaseCard)`
  padding: 36px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid #d6e3dc;
  font-size: 15px;
  color: black;

  &:focus-visible {
    border-color: #1f5f4a;
    box-shadow: 0 0 0 3px rgba(31, 95, 74, 0.08);
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid #d6e3dc;
  font-size: 15px;
  min-height: 120px;
  resize: vertical;
  color: black;

  &:focus-visible {
    border-color: #1f5f4a;
    box-shadow: 0 0 0 3px rgba(31, 95, 74, 0.08);
    outline: none;
  }
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
  transition: all 0.2s ease;

  &:hover {
    background: #1f5f4a;
    color: white;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background: #f0f0f0;
    border-color: #ddd;
    color: #999;
  }
`;

export const SuccessMessage = styled.div`
  margin: 10px 0;
  padding: 12px 16px;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 8px;
  font-size: 14px;
  border-left: 4px solid #4caf50;
  animation: fadeIn 0.3s ease-in-out;
`;

export const ErrorMessage = styled.div`
  margin: 10px 0;
  padding: 12px 16px;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 8px;
  font-size: 14px;
  border-left: 4px solid #f44336;
  animation: fadeIn 0.3s ease-in-out;
`;

// Add fadeIn animation
const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Create a style component for the animation
export const GlobalStyle = createGlobalStyle`${fadeIn}`;
