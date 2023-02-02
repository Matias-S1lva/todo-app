import React from "react";

const CreateTodoButton = ({ openModal, setOpenModal }) => {
  const toogleModal = () => {
    openModal
    ?
    setOpenModal(false)
    :
    setOpenModal(true)
  };

  return <button className="create-button" onClick={toogleModal}>+</button>;
};

export { CreateTodoButton };
