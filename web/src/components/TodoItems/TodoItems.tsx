import React from "react";

import "./TodoItems.css";

interface TodoItem {
  id: number;
  name: string;
  start: string;
  end: string;
  timeSpent: number;
  completed: boolean;
  active: boolean;
  todoItems: Array<object>;
}

// The TodoItems creates the UI for each individual todo list item. The handleDelete function will be used if a user want's to remove an item.

const TodoItems: React.SFC<{
  todoItems: Array<TodoItem>;
  handleDelete: (id: number) => void;
  handleMarkComplete: (id: number) => void;
}> = ({ todoItems, handleDelete, handleMarkComplete }) => {
  return (
    <section className="todoItemContainer">
      {todoItems.map(item => (
        <div className="todoCard" key={item.id}>
          <h1
            className="todoHeader"
            style={
              item.completed
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {item.name}
          </h1>
          <p className="todoDate">Start Date: {item.start} </p>
          <p className="todoDate"> End Date: {item.end}</p>
          <p className="todoTime">Time Spent: {item.timeSpent} hours</p>
          <button className="todoButton" onClick={() => handleDelete(item.id)}>
            Delete Item
          </button>
          <button
            className="todoButton"
            onClick={() => handleMarkComplete(item.id)}
          >
            Mark Complete
          </button>
        </div>
      ))}
    </section>
  );
};

export default TodoItems;
