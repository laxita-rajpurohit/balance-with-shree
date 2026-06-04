// Journey/style.ts
import styled, { keyframes } from "styled-components";

export const Section = styled.section<{ $compact?: boolean }>`
  width: 100%;
  padding: ${({ $compact }) => ($compact ? "48px 0 0" : "120px 0")};
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: ${({ $compact }) => ($compact ? "36px 0 0" : "80px 0")};
  }
`;

export const Inner = styled.div<{ $compact?: boolean }>`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $compact }) => ($compact ? "1.04fr 0.96fr" : "1.2fr 1fr")};
  background: ${({ $compact }) =>
    $compact
      ? "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(247,250,246,0.96))"
      : "#f7f3f7"};
  border-radius: ${({ $compact }) => ($compact ? "36px" : "24px")};
  overflow: hidden;
  border: ${({ $compact }) =>
    $compact ? "1px solid rgba(122, 160, 143, 0.14)" : "none"};
  box-shadow: ${({ $compact }) =>
    $compact ? "0 22px 54px rgba(15, 60, 40, 0.09)" : "none"};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.div<{ $compact?: boolean }>`
  padding: ${({ $compact }) => ($compact ? "42px 34px 36px" : "72px 80px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;

  h3 {
    font-size: ${({ $compact }) => ($compact ? "2.2rem" : "32px")};
    letter-spacing: ${({ $compact }) => ($compact ? "0" : "0.06em")};
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    max-width: ${({ $compact }) => ($compact ? "520px" : "460px")};
  }

  button {
    border: none;
    background: none;
    color: #1f5f4a;
    letter-spacing: ${({ $compact }) => ($compact ? "0.02em" : "0.18em")};
    cursor: pointer;
    font-size: 14px;
    width: max-content;
    padding: 0;
  }

  @media (max-width: 768px) {
    order: 2;
    padding: 28px 22px 26px;
    text-align: left;

    h3 {
      font-size: 27px;
    }

    p {
      max-width: none;
    }
  }
`;

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

// animated version of Text
export const AnimatedText = styled(Text)<{ $visible: boolean; $compact?: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateX(0)" : "translateX(-40px)"};
  animation: ${({ $visible }) => ($visible ? fadeInRight : "none")} 0.8s
    cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

export const Image = styled.img<{ $compact?: boolean }>`
  width: 100%;
  height: ${({ $compact }) => ($compact ? "100%" : "100%")};
  object-fit: cover;
  object-position: center 34%;
  min-height: ${({ $compact }) => ($compact ? "440px" : "unset")};

  @media (max-width: 768px) {
    order: 1;
    height: ${({ $compact }) => ($compact ? "296px" : "260px")};
    object-fit: ${({ $compact }) => ($compact ? "cover" : "contain")};
    object-position: center 22%;
    min-height: unset;
  }
`;
