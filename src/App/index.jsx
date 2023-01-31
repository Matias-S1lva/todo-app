import React, { useState, useEffect } from "react";
import { AppUI } from "../AppUI/index.jsx";
import "./App.css";

function useLocalStorage(itemName, initialValue) {
  //utilizamos otros hooks
  const [item, setItem] = useState(initialValue);

  //Creamos estado inicial para nuestros errores y carga
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Simulamos un segundo de delay de carga
    setTimeout(() => {
      //Manejamos la tarea dentro de un try/catch por si ocurre algun error
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
      } catch (error) {
        setError(error);
      } finally {
        //tambien podemos utilizar la ultima parte del try/catch para terminar la carga
        setLoading(false);
      }
    }, 1000);
  });

  //Guardamos nuestro item en una constante

  //Utilizamos la logica que teniamos, pero ahora con las variables y parametros nuevos
  //actualizamos la funcion para guaradar nuestro item con las nuevas variables y parametros
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  //para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return { item, saveItem, loading, error };
}

const App = () => {
  //Desestructuramos los nuevos datos de nuestro custom hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    errorm,
  } = useLocalStorage("TODOS_V1", []);

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
