import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  state = {
    value: "",

    todoData: [
      {
        id: 1,
        title: "React 공부하기",
        completed: true,
      },
      {
        id: 2,
        title: "KNY",
        completed: false,
      },
    ],
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  };
  handleCheckChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
            {/* <button>Delete All</button> */}
          </div>

          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                defaultChecked={data.completed}
                onChange={() => this.handleCheckChange(data.id)}
              />
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => this.handleClick(data.id)}
              >
                X
              </button>
            </div>
          ))}
          <form
            action=""
            style={{ display: "flex" }}
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="Todo"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" style={{ flex: "1" }} className="btn" />
          </form>
        </div>
      </div>
    );
  }
}
