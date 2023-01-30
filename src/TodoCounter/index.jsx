import React from "react";

const TodoCounter = ({ total, completed }) => {
  return (
    <h2>
      Has completado {completed} de {total} Todos
    </h2>
  );
};

export { TodoCounter };