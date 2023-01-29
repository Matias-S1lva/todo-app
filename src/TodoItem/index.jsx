import React from "react";
import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({text,completed,onComplete,onDelete}) => {

  return (
    <li className={completed ? "text-decoration" : undefined}>
      <FontAwesomeIcon
        icon={faCheck}
        onClick={onComplete}
        className={completed ? "icon-active" : undefined}
      />
      {text} <span onClick={onDelete}>X</span>
    </li>
  );
};

export { TodoItem };
