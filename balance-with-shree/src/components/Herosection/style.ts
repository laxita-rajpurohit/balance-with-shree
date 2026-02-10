// Hero/style.ts
import styled, { keyframes, css } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.section`
  background: white;
  max-width: 1100px;
  margin-top: 40px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow:
    0 26px 50px rgba(15, 40, 35, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 10px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 460px;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 768px) {
    height: 420px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`;

export const CarouselTrack = styled.div<{ $currentSlide: number }>`
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $currentSlide }) => `translateX(-${$currentSlide * 100}%)`};
`;

export const CarouselSlide = styled.div`
  min-width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* absolute layer containing heading + buttons */
export const CarouselButtons = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 2;
`;

export const CarouselButton = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    transform: scale(1.2);
  }
`;

export const Content = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

/* heading block */
export const HeadingBlock = styled.div`
  position: absolute;
  left: 12%;
  top: 18%;
  text-align: left;
  color: #24312d;

  h1 {
    font-size: 42px;
    line-height: 1.05;
  }

  @media (max-width: 768px) {
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    text-align: center;

    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 480px) {
    top: 8%;

    h1 {
      font-size: 26px;
    }
  }
`;

/* row of buttons positioned around the girl */
export const ButtonsRow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 18%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  pointer-events: auto; /* re‑enable clicks */

  @media (max-width: 768px) {
    bottom: 15%;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
    gap: 95px;
    padding: 0 20px;
    /* let your shared Button take half width instead of full */
    & > button {
      width: 48%;
      padding: 5px;
    }
  }
`;

// NEW: animated version of Content
export const AnimatedContent = styled(Content)<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(40px)"};
  animation: ${({ visible }) => (visible ? fadeUp : "none")} 0.8s
    cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
`;
