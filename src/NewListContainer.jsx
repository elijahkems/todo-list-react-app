import React from "react";
import NewTodo from "./NewTodo";

export default function NewListContainer({ todos, toggleTodos, deleteTodos }) {
  return (
    <ul className=" m-1 p-2x ">
      {todos.length === 0 && <label>No todos</label>}
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
