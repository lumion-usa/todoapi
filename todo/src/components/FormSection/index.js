import React, { Component } from "react";

class FormSection extends Component {
  state = {
    inputValue: ""
  };

  handleInputChange = event => {
    event.preventDefault();
    const { target: { value } } = event;

    this.setState({
      inputValue: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ name: this.state.inputValue })
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ inputValue: "" });
        console.log("Successfully submitted ", json);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <section className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="todoInput"
            placeholder="Insert your task here..."
            onChange={this.handleInputChange}
            value={this.state.inputValue}
          />
        </form>
      </section>
    );
  }
}

export default FormSection;
