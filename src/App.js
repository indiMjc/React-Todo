import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now()
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearComplete = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList
          todo={this.state.todos}
          handleToggleComplete={this.toggleComplete}
        />
        <TodoForm
          value={this.state.todo}
          handleChangeTodo={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
