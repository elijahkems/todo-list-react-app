import { useEffect, useState } from "react";
import "./App.css";
import NewForm from "./NewForm";
import NewListContainer from "./NewListContainer";

function App() {
  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem("ITEMS");
    return JSON.parse(items);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
    return;
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]);
  }

  function deleteTodos(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  }

  function toggleTodos(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  //return
  return (
    <>
      <h2>Todo list</h2>
      <NewForm addTodo={addTodo} />
      <NewListContainer
        todos={todos}
        deleteTodos={deleteTodos}
        toggleTodos={toggleTodos}
      />
    </>
  );
}

export default App;
