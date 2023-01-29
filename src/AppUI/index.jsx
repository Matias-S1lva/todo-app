import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

const AppUI = ({
  totalTodos,
  todosCompleted,
  search,
  setSearch,
  searchedTodos,
  completeTodos,
  deleteTodos,
}) => {
  return (
    <div className="container">
      <TodoCounter total={totalTodos} completed={todosCompleted} />

      <TodoSearch search={search} setSearch={setSearch} />

      <TodoList>
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

      <CreateTodoButton />
    </div>
  );
};

export { AppUI };
