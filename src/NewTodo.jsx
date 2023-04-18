import React from "react";

export default function NewTodo({ toggleTodos, deleteTodos, todo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          id="form-input"
          checked={todo.completed}
          onChange={(e) => toggleTodos(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <input
        type="button"
        value="delete"
        onClick={() => deleteTodos(todo.id)}
      />
    </li>
  );
}
