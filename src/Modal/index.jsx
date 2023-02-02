import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext";
import "./Modal.css";

const Modal = ({ children }) => {
  const { setOpenModal } = useContext(TodoContext);
  const closeModal = () => {
    setOpenModal(false);
  };
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };
