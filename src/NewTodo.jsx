import React from "react";

export default function NewTodo({ toggleTodos, deleteTodos, todo }) {
  return (
    <li className=" m-2 p-3 bg-slate-600  rounded justify-between ">
      <label className=" text-center text-base text-grey-100 w-full">
        <input
          type="checkbox"
          id="form-input"
          checked={todo.completed}
          className="rounded-full w-5 h-5 border border-black"
          onChange={(e) => toggleTodos(todo.id, e.target.checked)}
        />
        <span className="p-1 ">{todo.title}</span>
      </label>
      <input
        type="button"
        className=" text-black p-1 bg-rose-400 rounded  hover:bg-rose-400 focus:border-black"
        value="delete"
        onClick={() => deleteTodos(todo.id)}
      />
    </li>
  );
}
