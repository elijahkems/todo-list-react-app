import React from "react";
import NewTodo from "./NewTodo";

export default function NewListContainer({ todos, toggleTodos, deleteTodos }) {
  return (
    <ul className="m-2 p-2 rounded ">
      {todos.length === 0 && (
        <label className="text-[1.5em] text-primary-darker text-center w-[100%] block">
          No todos
        </label>
      )}
      {todos.map((todo) => {
        return (
          <NewTodo
            key={todo.id}
            todo={todo}
            toggleTodos={toggleTodos}
            deleteTodos={deleteTodos}
          />
        );
      })}
    </ul>
  );
}
