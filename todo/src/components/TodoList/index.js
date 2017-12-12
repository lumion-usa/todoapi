import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.todos.map(todo => <TodoItem todo={todo} />)}
      </ul>
    );
  }
}

class TodoItem extends Component {
  state = {
    isDone: false
  };

  handleRemoveItem = todoId => {
    fetch(`/api/todos/${this.props.todo._id}`, {
      method: "DELETE"
    });
  };

  toggleDone = event => {
    this.setState({
      isDone: !this.state.isDone
    });
  };

  render() {
    return (
      <li
        className="task"
        key={this.props.todo._id}
        onClick={this.toggleDone}
        className={`task ${this.state.isDone ? "done" : null}`}
      >
        {this.props.todo.name} <span onClick={this.handleRemoveItem}>X</span>
      </li>
    );
  }
}

export default TodoList;
