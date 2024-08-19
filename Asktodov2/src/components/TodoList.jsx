import React from "react";
import { Todoitem } from "./Todoitem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <ul className="list">
        {todos.length == 0 && "No Item to do"}
        {todos.map((todo) => {
          return (
            <Todoitem
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              key={todo.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
