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
      className="my-2 py-2 flex flex-row justify-between bg-slate "
      action=""
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className=" rounded  border-2 border-slate-500 m-2 p-2 w-full bg-slate-700 focus:outline-none focus:ring-1"
      />
      <input
        type="submit"
        className=" rounded border border-slate-500 m-2 p-2
         active:bg-slate-600 "
        value="Add Todo"
        onClick={handleSubmit}
      />
    </form>
  );
}
