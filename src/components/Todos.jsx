import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="container">
      <h2 className="text-center my-4">Todos List</h2>

      {props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />;
      })}
    </div>
  );
};

export default Todos;
