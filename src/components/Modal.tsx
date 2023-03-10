import { createPortal } from "react-dom";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useEffect, useRef } from "react";

type ModalProps = {
  children: ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
const Modal = ({ children, setShowModal }: ModalProps) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement("div");
  useEffect(() => {
    const modalRoot = document.getElementById("modal") as HTMLElement;
    modalRoot.appendChild(elRef.current as HTMLDivElement);
    return () => {
      modalRoot.removeChild(elRef.current as HTMLDivElement);
    };
  }, []);

  return createPortal(
    <div
      className="z-40 fixed top-0 overflow-hidden flex h-screen  w-screen   items-center justify-center bg-black bg-opacity-50 "
      onClick={() => setShowModal(false)}
    >
      {children}
    </div>,
    elRef.current
  );
};

export default Modal;
