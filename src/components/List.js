import React from "react";

const List = ({
  //   key,
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
}) => {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
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
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={snapshot.isDragging ? "selected" : "not-selected"}
    >
      <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => {
              handleCheckChange(id);
            }}
          />
          <span className={completed ? "line-through" : ""}>{title}</span>
        </div>
        <div className="items-center">
          <button
            onClick={() => {
              handleClick(id);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
