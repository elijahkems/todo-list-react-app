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
        className=" rounded border-[1px] border-primary-borders m-2 p-2 w-full text-primary-light bg-primary-transparent focus:outline-none focus:ring-1 ring-primary"
      />
      <input
        type="submit"
        className=" rounded border-[1px] border-primary-borders m-2 p-2 bg-primary text-primary-light
         active:bg-primary active:text-primary-light"
        value="Add Todo"
        onClick={handleSubmit}
      />
    </form>
  );
}
