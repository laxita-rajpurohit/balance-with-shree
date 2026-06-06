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
