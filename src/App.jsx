import { useEffect, useState } from "react";
<<<<<<< HEAD
import "./App.css";
import NewForm from "./NewForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);
  function addTodo(newItem) {
    setTodos((currentTodos) => {
      return [
        ...todos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
=======
import NewForm from "./NewForm";
import NewListContainer from "./NewListContainer";
import "./App.css";
import NewProgressBar from "./NewProgressBar";
import { motion } from "framer-motion";

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
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
      ...currentTodos,
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
>>>>>>> master
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
<<<<<<< HEAD

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewForm onFormSubmit={addTodo} />
      <h1 className="fs-5">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
=======
  const headerStyles = `bg-primary shadow-md shadow-primary-dark text-primary-light rounded 
                        p-3 m-2 mt-10 text-xl  
                        max-w-fit min-w-min whitespace-nowrap 
                        hover:shadow-xl hover:opacity-95
                        hover:cursor-pointer
                        active:shadow-lg`;
  //return
  return (
    <>
      <motion.div className=" my-2 mx-10 ">
        <button onClick={() => location.reload(true)}>
          <h2 className={headerStyles}>Todo list</h2>
        </button>
      </motion.div>
      <div className=" container m-0 mx-auto text-primary-light max-w-[1000px]">
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
>>>>>>> master
    </>
  );
}

export default App;
