import { useEffect, useState } from "react";
import NewForm from "./NewForm";
import NewListContainer from "./NewListContainer";
import "./App.css";
import NewProgressBar from "./NewProgressBar";

function App() {
  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem("ITEMS");
    return JSON.parse(items);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
    return;
  }, [todos]);

  function completedTodos() {
    const completed = todos.filter((todo) => todo.completed);
    if (completed <= 0) return completed.length;
    return completed.length + " / " + todos.length;
  }

  function getLevel() {
    const completed = todos.filter((todo) => todo.completed);
    return Math.round((completed.length / todos.length) * 100);
  }

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
  const headerStyles = `bg-primary-light shadow-md shadow-primary-dark text-primary-darker rounded 
                        p-3 m-2 mt-10 text-xl  
                        max-w-fit min-w-min whitespace-nowrap 
                        hover:shadow-xl hover:opacity-95
                        hover:cursor-pointer
                        active:shadow-lg`;
  //return
  return (
    <>
      <div className=" my-2 mx-10 ">
        <button onClick={() => location.reload(true)}>
          <h2 className={headerStyles}>Todo list</h2>
        </button>
      </div>
      <div className=" container m-0 mx-auto text-primary-darker max-w-[1000px]">
        <NewForm addTodo={addTodo} className=" max-w-[500px]" />
        <div className="m-2 px-4">
          <h2>Completed Todos: {completedTodos()}</h2>
          <NewProgressBar level={getLevel()} />
        </div>
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
