import React from "react";
import { BiTrash } from "react-icons/bi";
import NewCheckbox from "./NewCheckbox";

//component
export default function NewTodo({ toggleTodos, deleteTodos, todo }) {
  return (
    <li className=" relative m-2 my-4 px-4  pb-3 shadow-md shadow-primary-dark bg-primary-light rounded ">
      <div className=" rounded-br-lg rounded-tl-lg relative p-1 top-0 left-[-1em] border-b-2 border-r-2 border-primary flex flex-row space-x-3 js max-w-fit ">
        <NewCheckbox
          className="rounded text-primary-darker"
          todo={todo}
          checked={todo.completed}
          toggleTodos={toggleTodos}
        />
        <BiTrash
          className=" bg-primary-light text-xl text-primary-darker font-thick inline hover:text-primary hover:translate-y-[-5px] hover:transition-all duration-[900ms] "
          onClick={() => deleteTodos(todo.id)}
        />
      </div>
      <label className=" text-center text-base text-grey-100 w-full ">
        <span
          className="p-1 "
          style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
          {todo.title}
        </span>
      </label>
    </li>
  );
}
