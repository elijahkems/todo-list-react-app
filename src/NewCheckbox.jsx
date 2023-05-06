import React, { useState } from "react";
import { BiMessageSquare, BiMessageSquareCheck } from "react-icons/bi";

export default function NewCheckbox({
  checked,
  toggleTodos,
  todo,
  buttonStyles,
}) {
  function clickHandler(e) {
    toggleTodos(todo.id, !checked);
  }
  return !checked ? (
    <BiMessageSquare className={buttonStyles} onClick={clickHandler} />
  ) : (
    <BiMessageSquareCheck className={buttonStyles} onClick={clickHandler} />
  );
}
