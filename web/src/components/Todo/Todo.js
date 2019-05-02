import React from "react";

import TodoHeader from "../TodoHeader/TodoHeader";
import TodoForm from "../TodoForm/TodoForm";

const Todo = () => {
  return (
    <>
      <TodoHeader headerText="Task List Todo List" />
      <TodoForm />
    </>
  );
};

export default Todo;
