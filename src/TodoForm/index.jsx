import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo } = useContext(TodoContext);

  const onSaveTodo = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
  };
  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  return (
    <form className="container-form">
      <label>Ingresar tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="ingresar texto"
      ></textarea>
      <div></div>
      <button type="submit" onSubmit={onSaveTodo} className="form-button">
        Guardar
      </button>
      <button type="button" onClick={onCancel} className="form-button">
        Cancelar
      </button>
    </form>
  );
};

export { TodoForm };
