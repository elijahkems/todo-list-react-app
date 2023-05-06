import React, { useState } from "react";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";

export default function NewCheckbox({ checked, toggleTodos, todo }) {
  /* <input
        type="checkbox"
        id="form-input"
        checked={todo.completed}
        className="rounded-full w-5 h-5 border border-black"
        onChange={(e) => toggleTodos(todo.id, e.target.checked)}
      /> */

  function clickHandler(e) {
    toggleTodos(todo.id, !checked);
  }
  const style =
    "text-2xl hover:text-black hover:translate-y-[-5px] hover:transition-all duration-[900ms] ";

  return !checked ? (
    <BiCheckbox className={style} onClick={clickHandler} />
  ) : (
    <BiCheckboxChecked className={style} onClick={clickHandler} />
  );
}
