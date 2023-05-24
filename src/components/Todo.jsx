import React from "react";

const Todo = ({ todo, onDelete }) => {
  return (
    <>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button onClick={onDelete} className="btn btn-sm btn-danger" data-bs-toggle="button">
        Delete
      </button>
    </>
  );
};

export default Todo;
