import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalBox, CloseBtn } from "./style";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  const handleClose = () => {
    document.body.style.overflow = "auto";
    setVisible(false);

    // wait for animation to finish
    setTimeout(onClose, 450);
  };

  if (!visible) return null;

  return createPortal(
    <Overlay onClick={handleClose}>
      <ModalBox closing={!isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={handleClose}>✕</CloseBtn>
        {children}
      </ModalBox>
    </Overlay>,
    document.body
  );
};
