// rfc, rafce
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./List";

// React.memo : 불필요한 렌더링 막기
const Lists = React.memo(({ todoData, setTodoData }) => {
  const handleEnd = (result) => {
    // result : source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보 포함
    // console.log("result", result);
    if (!result.destination) {
      return;
    }

    // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
    const newTodoData = [...todoData];

    // splice : 변경 todo 제거
    const [reorderedData] = newTodoData.splice(result.source.index, 1);

    // splice : 변경 todo 추가, reorderedItem 추가
    newTodoData.splice(result.destination.index, 0, reorderedData);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                    ></List>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Lists;
