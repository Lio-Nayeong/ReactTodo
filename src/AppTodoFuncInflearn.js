import "./App.css";
import React, { useState, useRef } from "react";

export default function App() {
  let inputValue = useRef();
  const [todoData, setTodoData] = useState([
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
  ]);
  const [value, setValue] = useState("");

  let btnStyle = {
    color: "#aaa",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  let getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    console.log(newTodo);

    // setTodoData({ todoData: [...todoData, newTodo], value: "" });
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };
  const handleCheckChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
          {/* <button>Delete All</button> */}
        </div>

        {todoData.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={data.completed}
              onChange={() => {
                handleCheckChange(data.id);
              }}
            />
            {data.title}
            <button
              style={btnStyle}
              onClick={() => {
                handleClick(data.id);
              }}
            >
              X
            </button>
          </div>
        ))}
        <form action="" style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Todo"
            ref={inputValue}
            // value={value}
            onChange={handleChange}
          />
          <input type="submit" style={{ flex: "1" }} className="btn" />
        </form>
      </div>
    </div>
  );
}
