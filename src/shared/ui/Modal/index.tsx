import { useCallback, useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalBox, CloseBtn } from "./style";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    if (isClosing) return;

    document.body.style.overflow = "auto";
    setIsClosing(true);
    window.setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 450);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleClose, isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <Overlay onClick={handleClose}>
      <ModalBox
        $closing={isClosing}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn onClick={handleClose} aria-label="Close dialog">
          ✕
        </CloseBtn>
        {children}
      </ModalBox>
    </Overlay>,
    document.body,
  );
};
