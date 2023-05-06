import React from "react";
import { BiTrash } from "react-icons/bi";
import NewCheckbox from "./NewCheckbox";

//component
export default function NewTodo({ toggleTodos, deleteTodos, todo }) {
  const textStyles = () => {
    let style = "text-primary-darker p-1 text-lg";
    if (todo.completed) return style + " line-through";
    else return style;
  };

  const buttonStyles = `bg-primary-light text-xl text-primary-darker  font-thick inline 
                        hover:text-primary hover:translate-y-[-5px] 
                        hover:transition-all duration-[900ms]`;
  //
  return (
    <li className=" relative m-2 my-4 px-4  pb-3 shadow-md shadow-primary-dark bg-primary-light rounded hover:shadow-primary">
      <div className=" rounded-br-lg rounded-tl-lg relative p-1 top-0 left-[-1em] border-b-2 border-r-2 border-primary flex flex-row space-x-3 js max-w-fit ">
        <NewCheckbox
          className="rounded text-primary-darker"
          todo={todo}
          checked={todo.completed}
          toggleTodos={toggleTodos}
          buttonStyles={buttonStyles}
        />
        <BiTrash
          className={buttonStyles}
          onClick={() => deleteTodos(todo.id)}
        />
      </div>
      <label className=" text-center text-base text-grey-100 w-full ">
        <span className={textStyles()}>{todo.title}</span>
      </label>
    </li>
  );
}
