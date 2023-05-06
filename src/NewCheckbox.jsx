import React, { useState } from "react";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";

export default function NewCheckbox({
  checked,
  toggleTodos,
  todo,
  buttonStyles,
}) {
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
  buttonStyles = buttonStyles + " text-2xl";

  return !checked ? (
    <BiCheckbox className={buttonStyles} onClick={clickHandler} />
  ) : (
    <BiCheckboxChecked className={buttonStyles} onClick={clickHandler} />
  );
}
