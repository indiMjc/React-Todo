import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleChangeTodo}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Enter todo item"
      />
      <br />
      <button onClick={props.handleAddTodo}>Submit</button>
    </form>
  );
};

export default TodoForm;
