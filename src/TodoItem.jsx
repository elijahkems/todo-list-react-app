export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li key={id} className="row border ">
      <label
        className="col"
        htmlFor="list-label"
        style={{ color: completed && "grey" }}
        id="list-label"
      >
        <input
          type="checkbox"
          className="delete-btn"
          id="list-label"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="delete-btn alert alert-danger"
      >
        Delete
      </button>
    </li>
  );
}
