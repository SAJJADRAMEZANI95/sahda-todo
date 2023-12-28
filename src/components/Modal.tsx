// components/Modal.js
import React, { PropsWithChildren } from "react";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  zIndex: "1000",
} as any;

const overlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: "999",
} as any;

type ModalProps = PropsWithChildren<{ onClose: () => void; isOpen: boolean }>;

export const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  const modalDisplay = isOpen ? "block" : "none";

  return (
    <div>
      <div
        style={{ ...overlayStyle, display: modalDisplay }}
        onClick={onClose}
      ></div>
      <div style={{ ...modalStyle, display: modalDisplay }}>{children}</div>
    </div>
  );
};
