// Hero/style.ts
import styled from "styled-components";

export const Wrapper = styled.section`
  background: white;
  max-width: 1100px;
  margin: 40px auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  /* static 3D look */
  box-shadow:
    0 26px 50px rgba(15, 40, 35, 0.22),   /* deep outer shadow */
    0 0 0 1px rgba(255, 255, 255, 0.9);   /* subtle light edge */
  transform: translateY(-4px);           /* tiny lift off background */

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 10px;
  }
`;



export const Img = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 420px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`;

/* absolute layer containing heading + buttons */
export const Content = styled.div`
  position: absolute;
  inset: 0; /* stretch over image */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* top heading, lower buttons */
  pointer-events: none; /* let buttons set their own pointer events */

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
    bottom: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
    gap: 95px;
padding: 0 20px;
    /* let your shared Button take half width instead of full */
    & > button {
      width: 48%;
      padding
      :5px;
    }
  }
`;
