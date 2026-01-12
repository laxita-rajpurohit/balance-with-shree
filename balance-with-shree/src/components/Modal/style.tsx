import styled, { keyframes, css } from "styled-components";

/* ===== OPEN ===== */
const foldOpen = keyframes`
  from {
    opacity: 0;
    transform: perspective(1200px) rotateX(-12deg) scale(0.94) translateY(40px);
  }
  to {
    opacity: 1;
    transform: perspective(1200px) rotateX(0deg) scale(1) translateY(0);
  }
`;

/* ===== CLOSE ===== */
const foldClose = keyframes`
  from {
    opacity: 1;
    transform: perspective(1200px) rotateX(0deg) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: perspective(1200px) rotateX(-10deg) scale(0.95) translateY(40px);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(14, 22, 18, 0.55);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

export const ModalBox = styled.div<{ closing?: boolean }>`
  background: linear-gradient(180deg, #ffffff 0%, #fbfdfc 100%);
  border-radius: 28px;
  width: 100%;
  max-width: 900px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 40px 36px;
  position: relative;
  border-radius: 24px;
  box-shadow: 0px 40px 80px rgba(15, 60, 40, 0.25),
    0px 2px 8px rgba(15, 60, 40, 0.08);

  transform-origin: center top;

  animation: ${({ closing }) =>
    closing
      ? css`
          ${foldClose} 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)
        `
      : css`
          ${foldOpen} 0.55s cubic-bezier(0.22, 0.61, 0.36, 1)
        `};

  @media (max-width: 768px) {
    align-self: flex-end;
    transform-origin: center bottom;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: #eef4f1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
`;
