import React,{useContext} from "react";
import { TodoContext } from "../TodoContext";

const TodoCounter = () => {
  const {totalTodos,todosCompleted} = useContext(TodoContext)
  return (
    <h2>
      Has completado {todosCompleted} de {totalTodos} Todos
    </h2>
  );
};

export { TodoCounter };
