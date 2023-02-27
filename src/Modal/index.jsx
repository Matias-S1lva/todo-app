import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const Modal = ({ children,setOpenModal }) => {
  
  const closeModal = () => {
    setOpenModal(false);
  };
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };
