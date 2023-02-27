import React,{useContext} from "react";


const TodoCounter = ({totalTodos,todosCompleted}) => {

  return (
    <h2>
      Has completado {todosCompleted} de {totalTodos} Todos
    </h2>
  );
};

export { TodoCounter };
