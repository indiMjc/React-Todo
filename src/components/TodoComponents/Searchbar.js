import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Search todos:
            <input
              id="todo"
              type="text"
              name="textField"
              placeholder="Search"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Searchbar;
