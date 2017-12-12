import React, { Component } from "react";
import TodoList from "../TodoList";
import FormSection from "../FormSection";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    fetch("/api/todos")
      .then(response => response.json())
      .then(json => this.setState({ todos: json }));
  }

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  removeTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo._id !== todoId;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            todo<span>list</span>
          </h1>
          <h2>A simple todo list app built with node</h2>
        </header>

        <FormSection addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
