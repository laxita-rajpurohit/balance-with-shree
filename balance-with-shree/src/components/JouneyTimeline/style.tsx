// JourneyTimeline.styles.ts
import styled, { keyframes } from "styled-components";

/* =======================
   STYLES
======================= */

export const TimelineWrapper = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 80px auto;
  padding: 0 24px;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 56px;
`;

export const TimelineContainer = styled.div`
  position: relative;
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 2px dashed #96c7b5;

  @media (max-width: 768px) {
    left: 24px;
    transform: none;
  }
`;

export const FloatingDot = styled.div<{ y: number }>`
  position: absolute;
  left: 50%;
  transform: translate(-50%, ${({ y }) => y}px);
  z-index: 10;

  @media (max-width: 768px) {
    left: 24px;
  }
`;

export const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #96c7b5;
  box-shadow: 0 0 0 6px rgba(150, 199, 181, 0.25);
  .active {
    animation: pulse 1.2s ease-out;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.4);
      opacity: 0.6;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const CardRow = styled.div<{ align: "left" | "right" }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  align-items: center;

  & > div:nth-child(1) {
    order: ${({ align }) => (align === "left" ? 1 : 2)};
    margin-left: ${({ align }) => (align === "left" ? "25%" : 0)};
    margin-right: ${({ align }) => (align === "left" ? "0" : "25%")};
  }

  & > div:nth-child(2) {
    order: ${({ align }) => (align === "left" ? 2 : 1)};
    margin-right: ${({ align }) => (align === "right" ? "0" : "25%")};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding-left: 64px;
    div:nth-child(1) {
      margin: 0;
    }
    & > div {
      order: unset;
      margin: 0;
    }
  }
`;

export const ImageContainer = styled.div`
  // width: 360px;
  height: 240px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextBlock = styled.div`
  max-width: 420px;
  color: #4a4a4a;
  line-height: 1.6;
  // background: linear-gradient(180deg, #9bb7a5 0%, #9bb7a5 100%);
  // border-radius: 24px 0px 24px 24px;
  // padding: 10px;
  // &:nth-child(2) {
  // }
  // &:nth-child(1) {
  //   border-radius: 0px 24px 24px 24px;
  // }
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: justify;
  }
`;

export const Strong = styled.span`
  font-weight: 700;
`;

/* =======================
   ANIMATIONS
======================= */

const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const AnimatedSide = styled.div<{
  side: "left" | "right";
  visible: boolean;
}>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible, side }) =>
      visible ? (side === "left" ? fadeInLeft : fadeInRight) : "none"}
    700ms ease-out both;

  @media (max-width: 768px) {
    animation: none;
    transform: ${({ visible }) =>
      visible ? "translateY(0)" : "translateY(24px)"};
    transition: transform 0.6s ease-out;
  }
`;
