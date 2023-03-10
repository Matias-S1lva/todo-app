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
  const onReset = () => {
    setNewTodoValue("");
  };

  return (
    <form onSubmit={onSaveTodo} className="container-form">
      <label>Ingresar tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="ingresar texto"
      ></textarea>
      <div className="buttons-form">
        <button type="submit" className="form-button">
          Guardar
        </button>
        <button type="reset" onClick={onReset} className="form-button">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
