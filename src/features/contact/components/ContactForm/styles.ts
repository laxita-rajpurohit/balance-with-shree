import styled, { css } from "styled-components";

const surfaceCard = css`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

export const CardSection = styled.section`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`;

export const FormCard = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.42), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 244, 0.98));
`;

export const CardTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.46rem, 5.4vw, 2.1rem);
  line-height: 1.14;
`;

export const CardText = styled.p`
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.66;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 18px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
`;

const inputBase = css`
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(122, 160, 143, 0.22);
  background: rgba(255, 255, 255, 0.94);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  line-height: 1.5;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &::placeholder {
    color: rgba(95, 111, 102, 0.88);
  }

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(31, 95, 74, 0.08);
    background: #ffffff;
  }

  &:disabled {
    opacity: 0.72;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  ${inputBase}
`;

export const Textarea = styled.textarea`
  ${inputBase}
  min-height: 136px;
  resize: vertical;
`;

export const SuccessMessage = styled.div`
  padding: 12px 14px;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
  border-left: 4px solid #4caf50;
  animation: contactFadeIn 0.3s ease-in-out;
`;

export const ErrorMessage = styled.div`
  padding: 12px 14px;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
  border-left: 4px solid #f44336;
  animation: contactFadeIn 0.3s ease-in-out;
`;
