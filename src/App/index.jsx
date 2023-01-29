import React, { useState } from "react";
import { AppUI } from "../AppUI/index.jsx";
import "./App.css";

function useLocalStorage(itemName, initialValue) {
  //Guardamos nuestro item en una constante
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  //Utilizamos la logica que teniamos, pero ahora con las variables y parametros nuevos
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  //utilizamos otros hooks
  const [item, setItem] = useState(parsedItem);

  //actualizamos la funcion para guaradar nuestro item con las nuevas variables y parametros
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  //Regresamos los datos que necesitamos
  return [item, saveItem];
}

const App = () => {
  //Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos argumentos que necesitamos (nombre y estado inicial)
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [search, setSearch] = useState("");

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
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      todosCompleted={todosCompleted}
      search={search}
      searchedTodos={searchedTodos}
      setSearch={setSearch}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
};

export { App };
