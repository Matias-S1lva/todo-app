import React, { useState } from "react";
import { AppUI } from "./AppUI";
import "./App.css";
import { useLocalStorage } from "./useLocalStorage";

const App = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const todosCompleted = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true);

    saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
  };
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      todosCompleted={todosCompleted}
      search={search}
      searchedTodos={searchedTodos}
      setSearch={setSearch}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
      addTodo={addTodo}
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  );
};

export { App };
