import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggle, deletee }) => {
  return (
    <div>
      <ul className="list">
        {todos.length == 0 && "No Item"}
        {todos.map((todo) => {
          return <TodoItem {...todo} toggle={toggle} deletee={deletee} />;
        })}
      </ul>
    </div>
  );
};
