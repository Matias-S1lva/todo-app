import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const {search,setSearch} = useContext(TodoContext)
  const searchItem = (e) => {
    setSearch(e.target.value);
  };
  return <input placeholder="cebolla" value={search} onChange={searchItem} />;
};

export { TodoSearch };
