import "./App.css";
import React, { useState, useRef } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
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
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("메모를 입력해주세요.");
      // console.log(inputRef);
      inputRef.current.focus();
      return;
    }

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // console.log(newTodo);

    // setTodoData({ todoData: [...todoData, newTodo], value: "" });
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleDeleteClick = () => {
    if (window.confirm("Delete All?")) {
      setTodoData([]);
    }
  };

  return (
    <div className="flex justify-center w-screen h-screen bg-gray-300">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1 className="">Memo</h1>
          <button onClick={handleDeleteClick}>Delete All</button>
        </div>
        <Form
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
          inputRef={inputRef}
        />
        <div className="w-full my-4 border"></div>
        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
}
