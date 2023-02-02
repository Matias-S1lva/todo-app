import React, { createContext,useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
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
    newTodos.push({text, completed:false})
    saveTodos(newTodos);
  };
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        todosCompleted,
        search,
        searchedTodos,
        setSearch,
        completeTodos,
        deleteTodos,
        addTodo,
        openModal, 
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}



export { TodoContext,TodoProvider };
