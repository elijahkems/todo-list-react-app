import { useEffect, useState } from "react";
import NewForm from "./NewForm";
import NewListContainer from "./NewListContainer";
import "./App.css";

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
      <div className=" my-2 mx-10 ">
        <a href="" target="" rel="noopener noreferrer">
          <h2 className=" bg-primary-light shadow-sm shadow-primary-dark rounded p-3 m-2 mt-10 text-xl  max-w-fit min-w-min whitespace-nowrap">
            Todo list
          </h2>
        </a>
      </div>
      <div className=" max-w-[500px] m-0 mx-auto">
        <NewForm addTodo={addTodo} />
        <NewListContainer
          todos={todos}
          deleteTodos={deleteTodos}
          toggleTodos={toggleTodos}
        />
      </div>
    </>
  );
}

export default App;
