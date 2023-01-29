import React, { useState } from "react";
import "./TodoSearch.css";

const TodoSearch = ({ search, setSearch }) => {
  const searchItem = (e) => {
    setSearch(e.target.value);
  };
  return <input placeholder="cebolla" value={search} onChange={searchItem} />;
};

export { TodoSearch };
