import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(14, 22, 18, 0.55);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #fbfdfc 100%);
  border-radius: 28px;
  width: 100%;
  padding: 40px 36px;
  position: relative;

  box-shadow: 0px 30px 60px rgba(15, 60, 40, 0.18),
    0px 2px 8px rgba(15, 60, 40, 0.08);

  animation: modalIn 0.35s ease;

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: translateY(18px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;

  border: none;
  background: #eef4f1;
  color: #2b2a29;

  width: 36px;
  height: 36px;
  border-radius: 50%;

  font-size: 18px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: #e2ede8;
  }
`;
