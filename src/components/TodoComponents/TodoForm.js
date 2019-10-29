import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.changeTodo}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Enter todo item"
      />
      <br />
      <button onClick={props.addTodo}>Submit</button>
      <br />
      <button onClick={props.clearComplete}>Clear completed items</button>
    </form>
  );
};

export default TodoForm;
