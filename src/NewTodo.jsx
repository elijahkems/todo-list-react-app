import React from "react";
import { BiMessageSquareX } from "react-icons/bi";
import NewCheckbox from "./NewCheckbox";

//component
export default function NewTodo({ toggleTodos, deleteTodos, todo }) {
  const textStyles = () => {
    let style = "text-primary-light p-1 text-lg";
    if (todo.completed) return style + " line-through text-primary-borders";
    else return style;
  };

  const buttonStyles = ` text-3xl p-1 text-primary-light  font-thick inline 
                        hover:translate-y-[-5px] 
                        hover:transition-all duration-[900ms]`;
  //
  return (
    <li className=" relative m-2 my-4 px-4  pb-3 shadow-md shadow-primary-dark bg-primary rounded hover:shadow-primary">
      <div className=" rounded-br-lg rounded-tl-lg relative  px-2 top-0 left-[-1em] border-b-2 border-r-2 border-primary flex flex-row space-x-3 js max-w-fit ">
        <NewCheckbox
          todo={todo}
          checked={todo.completed}
          toggleTodos={toggleTodos}
          buttonStyles={buttonStyles}
        />
        <BiMessageSquareX
          className={buttonStyles}
          onClick={() => deleteTodos(todo.id)}
        />
      </div>
      <label>
        <span className={textStyles()}>{todo.title}</span>
      </label>
    </li>
  );
}
