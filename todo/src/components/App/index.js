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

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            todo<span>list</span>
          </h1>
          <h2>A simple todo list app built with node</h2>
        </header>

        <FormSection />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
