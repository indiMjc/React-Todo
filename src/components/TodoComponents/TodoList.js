import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <>
      {props.todo.map(todo => (
        <>
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={props.toggleComplete}
          />
          <br />
        </>
      ))}
    </>
  );
};

export default TodoList;
