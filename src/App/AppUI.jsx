import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

const AppUI = ({
  error,
  loading,
  searchedTodos,
  completeTodos,
  deleteTodos,
  openModal,
  setOpenModal,
  totalTodos,
  todosCompleted,
  search,
  setSearch,
  addTodo,
}) => {
  return (
    <div className="container">
      <TodoCounter totalTodos={totalTodos} todosCompleted={todosCompleted} />

      <TodoSearch search={search} setSearch={setSearch} />

      <TodoList>
        {error && <p>Hubo un error...</p>}
        {loading && <p>Estamos cargando, no te persiga...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm addTodo={addTodo} />
        </Modal>
      )}

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export { AppUI };