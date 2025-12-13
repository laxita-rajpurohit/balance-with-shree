import styled from "styled-components";

/**
 * Outer wrapper – white card on green background
 */
export const Wrapper = styled.section`
  max-width: 1100px;
  margin: 120px auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 80px 72px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 64px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 48px 32px;
  }
`;

/**
 * Heading – elegant serif, spaced like reference
 */
export const Heading = styled.h2`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

/**
 * Supporting text – calm, breathable
 */
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.7;
  max-width: 420px;
  margin-bottom: 32px;
`;

/**
 * CTA button – rounded pill, muted green
 */
export const Button = styled.button`
  background: ${({ theme }) => theme.colors.dark};
  color: white;
  border: none;
  padding: 14px 40px;
  border-radius: 40px;
  font-size: 13px;
  letter-spacing: 0.08em;
  cursor: pointer;
`;

/**
 * Right image block – soft card look like image
 */
export const ImageBox = styled.div`
  background: linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
    ),
    url("/assets/images/nutrition.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  height: 340px;
  display: flex;
  align-items: flex-end;
  padding: 24px;

  p {
    color: white;
    font-size: 14px;
    max-width: 220px;
  }
`;
