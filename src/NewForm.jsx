import React, { useState } from "react";

export default function NewForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }
  return (
    <form
      className=" max-w-[700px] mx-auto my-2 p-2 flex flex-row justify-between bg-slate "
      action=""
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className=" rounded shadow-primary-dark shadow-md border-primary m-2 p-2 w-full bg-primary-light focus:outline-none focus:ring-1 ring-primary"
      />
      <input
        type="submit"
        className=" rounded shadow-primary-dark shadow-md border-primary m-2 p-2 bg-primary-light text-primary-darker
         active:bg-primary active:text-primary-light"
        value="Add Todo"
        onClick={handleSubmit}
      />
    </form>
  );
}
