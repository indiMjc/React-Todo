import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add Item:
          <br />
          <input
            type="text"
            name="item"
            id="item"
            onChange={this.handleChanges}
          />
          <br />
          <button>Submit</button>
        </label>
      </form>
    );
  }
}

export default TodoForm;
