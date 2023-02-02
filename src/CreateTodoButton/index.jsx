import React from "react";

const CreateTodoButton = ({ openModal, setOpenModal }) => {
  const toggleModal = () => {
    openModal ? setOpenModal(false) : setOpenModal(true);
  };

  return (
    <button
      className={openModal ? "create-button delete-button" : "create-button"}
      onClick={toggleModal}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
