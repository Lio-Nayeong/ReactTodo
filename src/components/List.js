import React, { useState } from "react";

const List = React.memo(
  ({
    //   key,
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    inputRef,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleDeleteClick = (id) => {
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
    const handleEdit = (e) => {
      setIsEditing(true);
      inputRef.current.focus();
    };
    const handleEditChange = (e) => {
      setEditedTitle(e.target.value);
    };
    const handleSubmit = (e) => {
      // e.preventDefault();
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
          <div className="items-center">
            <form onSubmit={handleSubmit}>
              <input
                inputRef={inputRef}
                value={editedTitle}
                onChange={handleEditChange}
                className={"w-full px-3 py-2 mr-4 text-gray-500 rounded"}
              />
            </form>
          </div>
          <div className="items-center">
            <button
              onClick={handleSubmit}
              className="float-right px-4 py-2"
              type="submit"
            >
              save
            </button>
          </div>
        </div>
      );
    }

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
            <span className={completed ? "line-through" : ""}> {title}</span>
          </div>
          <div className="items-center">
            <button
              className="float-right px-4 py-2 text-red-500"
              onClick={() => {
                handleDeleteClick(id);
              }}
            >
              X
            </button>
            <button className="float-right px-4 py-2" onClick={handleEdit}>
              edit
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default List;
