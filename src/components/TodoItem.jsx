import React from 'react';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  const handleTextClick = () => {
    toggleTodo(id, !completed);
  };

  return (
    <li className={`items ${completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span
          onClick={handleTextClick}
          style={{
            textDecoration: completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {title}
        </span>
      </label>
      <br />
      <button
        className="btn-danger delete-button"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}


