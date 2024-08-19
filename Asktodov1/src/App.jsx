import { useState, useEffect } from "react";
import "./assets/css/style.css";
import { Newform } from "./component/Newform";
import { TodoList } from "./component/TodoList";
function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const deletee = (id) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id != id);
    });
  };

  const toggle = (id, completed) => {
    setTodos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  return (
    <div>
      <Newform addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} deletee={deletee} toggle={toggle} />
    </div>
  );
}

export default App;
