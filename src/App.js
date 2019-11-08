import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./styling.css";

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

  // let todoState = this.state.todos;
  //
  // is there a place I can declare a variable like this to keep code dry?

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
    let todos = [...this.state.todos];
    //
    //  why can't I just do this.state.todos.map() below?
    //
    todos.map(todo => {
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
      <div className="main-contain">
        <TodoList
          todo={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          value={this.state.todo}
          changeTodo={this.changeTodo}
          addTodo={this.addTodo}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
