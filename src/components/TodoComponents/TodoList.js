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
            handleToggleComplete={props.handleToggleComplete}
          />
          <br />
        </>
      ))}
    </>
  );
};

export default TodoList;
