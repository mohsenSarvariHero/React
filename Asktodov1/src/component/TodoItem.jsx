import React from "react";

export const TodoItem = ({ id, completed, title, toggle, deletee }) => {
  return (
    <div>
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggle(id, e.target.checked)}
          />
          {title}
        </label>
        <button className="btn btn-danger" onClick={() => deletee(id)}>
          Delete
        </button>
      </li>
    </div>
  );
};
