import { useState } from "react";

export default function NewForm({ onFormSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onFormSubmit(newItem);
    setNewItem("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="container bg-dark-subtle rounded p-5"
    >
      <div className="mb-3 ">
        <label htmlFor="textInput" className="float-start fs-5">
          Add Items
        </label>
        <input
          type="text"
          id="textInput"
          className="form-control"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn btn-primary w-100">add</button>
    </form>
  );
}
