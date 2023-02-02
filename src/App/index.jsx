import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
import "./App.css";

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export { App };
