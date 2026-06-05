import styled, { createGlobalStyle, css } from "styled-components";

const surfaceCard = css`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

export const fadeIn = `
  @keyframes contactFadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const GlobalStyle = createGlobalStyle`${fadeIn}`;

export const Page = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 88px;

  @media (min-width: 769px) {
    padding-bottom: 32px;
  }
`;

export const Column = styled.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  > * {
    scroll-margin-top: 80px;
  }

  @media (min-width: 769px) {
    gap: 24px;

    > * {
      scroll-margin-top: 112px;
    }
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

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({ theme }) => theme.colors.warmAccent};
    font-size: 11px;
    line-height: 1;
  }
`;

export const SectionTitle = styled.h1`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.8rem, 6.5vw, 3rem);
  line-height: 1.08;
`;

export const SectionBody = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.66;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.72;
  }
`;

export const Divider = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.warmAccent};
  margin: 14px 0 2px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 12px;
    line-height: 1;
  }
`;

export const Hero = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.84), transparent 28%),
    radial-gradient(circle at left bottom, rgba(220, 232, 223, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.97));
  text-align: center;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;

  > * {
    width: 100%;
  }

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;

    > * {
      width: auto;
      min-width: 184px;
    }
  }
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactCard = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(226, 235, 224, 0.4), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(249, 247, 241, 0.98));
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

export const ActionRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`;

export const ActionRow = styled.a`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(249, 251, 247, 0.94);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: inherit;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(15, 60, 40, 0.05);

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(31, 95, 74, 0.08),
      0 0 0 1px rgba(31, 95, 74, 0.42);
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(249, 251, 247, 0.94);
  border: 1px solid rgba(122, 160, 143, 0.1);
  box-shadow: 0 10px 22px rgba(15, 60, 40, 0.05);
  margin-top: 10px;
`;

export const ActionIcon = styled.span`
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`;

export const ActionContent = styled.div`
  min-width: 0;
`;

export const ActionLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ActionValue = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
`;

export const ActionArrow = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 18px;
  line-height: 1;
`;

export const NoticeCard = styled.div`
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(244, 250, 246, 0.96);
  border: 1px solid rgba(122, 160, 143, 0.16);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.58;
`;

export const VoiceNoteCard = styled(CardSection)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.52), transparent 24%),
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.38), transparent 26%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.97), rgba(228, 238, 221, 0.97));
`;

export const VoiceNoteAction = styled.div`
  margin-top: 16px;

  > * {
    width: 100%;
  }
`;

export const FormCard = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.42), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 244, 0.98));
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
