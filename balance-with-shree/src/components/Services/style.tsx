// src/components/Services/style.ts
import styled from "styled-components";

export const CardsRow = styled.section`
  max-width: 1100px;
  margin: 80px auto;
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

// style.ts
export const Card = styled.article`
  width: 400px;
  height: 210px;
  border-radius: 24px;
  border: 2px solid transparent;

  /* solid fill + gradient border */
  background: linear-gradient(#e9f8f3, #d7efe7) padding-box,
    linear-gradient(135deg, #9ed6c3, #7fb6d4) border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  color: #284b43;

  box-shadow: 0 14px 26px rgba(15, 60, 40, 0.16),
    0 0 0 1px rgba(255, 255, 255, 0.7) inset;
  transform: translate3d(0, 0, 0);
  transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease;

  &:hover {
    transform: translate3d(0, -10px, 0) scale(1.04);

    /* brighter gradient border + fill on hover */
    background: linear-gradient(#f4fbf8, #e4f6f0) padding-box,
      linear-gradient(135deg, #b0f0d2, #9cc7ff) border-box;

    box-shadow: 0 26px 45px rgba(10, 40, 30, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.9) inset;
  }
`;

export const Icon = styled.div`
  font-size: 30px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

export const Divider = styled.span`
  width: 60px;
  height: 1px;
  background: rgba(40, 75, 67, 0.4);
`;

export const LinkText = styled.button`
  position: relative;
  margin-top: 4px;
  border: none;
  background: none;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
  color: #245a4e;
  padding: 0;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 32px;
  letter-spacing: 0.06em;
  color: #264241;
`;
