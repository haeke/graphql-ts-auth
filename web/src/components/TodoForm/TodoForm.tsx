import React, { Component } from "react";

import TodoItems from "../TodoItems/TodoItems";

import "./TodoForm.css";

export interface TodoItem {
  id: number;
  name: string;
  start: string;
  end: string;
  timeSpent: number;
  completed: boolean;
  active: boolean;
}

// This defines what the state object that the TodoForm will implement.
// I passed an empty object to the TodoForm because there are no props that the TodoForm will use for now.
interface State {
  id: number;
  name: string;
  start: string;
  end: string;
  timeSpent: number;
  completed: boolean;
  active: boolean;
  error: boolean;
  todoItems: Array<TodoItem>;
}

class TodoForm extends Component<{}, State> {
  state = {
    id: 0,
    name: "",
    start: "",
    end: "",
    timeSpent: 0,
    completed: false,
    active: true,
    error: false,
    todoItems: []
  };
  // check to see if there exists a taskListTodo item in local storage
  componentDidMount() {
    // The localStorage.getItem function will return a string or a null,
    let todoItems: any = JSON.parse(
      localStorage.getItem("taskListTodos") || "[]"
    );
    if (todoItems.length > 0) {
      // we want to get the id of the last item in the todo list so that we can update the id in state so that there are not id's that are the same.
      let newId = todoItems.length - 1;
      this.setState({
        id: todoItems[newId].id,
        todoItems
      });
    }
  }
  // The handleChange method is a reusable function that will be used to create the list of controlled inputs to change the values of the name, start, end and timeSpent.
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    } as any);
  };

  handleDelete = (id: number): void => {
    const { todoItems } = this.state;
    let newItems = todoItems.filter((todo: TodoItem) => todo.id !== id);

    // update local storage
    localStorage.setItem("taskListTodos", JSON.stringify(newItems));
    this.setState({
      todoItems: newItems
    });
  };

  handleMarkComplete = (id: number): void => {
    const { todoItems } = this.state;
    let markComplete = todoItems.map((todo: TodoItem) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({
      todoItems: markComplete
    });
  };

  // The handleSubmit component will add a new object to the todoItems array when a user submits the form.
  handleSubmit = event => {
    // Use preventDefault so that the browser does not reload after the form is submitted.
    event.preventDefault();
    // Destructure the current items inside of state
    const {
      id,
      name,
      start,
      end,
      timeSpent,
      active,
      completed,
      todoItems
    } = this.state;
    // create an object consisting of the form values, increment the id by one for each newItem created.
    let newItem = {
      id: id + 1,
      name,
      start,
      end,
      timeSpent,
      completed,
      active
    };
    // make sure that the name, start, end, and timeSpent objects aren't blank
    if (!name || !start || !end || !timeSpent) {
      this.setState({
        error: true
      });
    } else {
      // create a new array consisting of the current items inside of the todoItems array and the newItem object.
      let newItems = [...todoItems, newItem];

      // update state with the new array consisting of the items that exist in state and the new item consisting of the form values.
      this.setState(
        () => ({
          todoItems: newItems,
          id: id + 1,
          name: "",
          start: "",
          end: "",
          timeSpent: 0,
          completed: false,
          error: false,
          active: true
        }),
        () => {
          // update local storage
          localStorage.setItem(
            "taskListTodos",
            JSON.stringify(this.state.todoItems)
          );
        }
      );
    }
  };
  render() {
    const { name, start, end, timeSpent, todoItems, error } = this.state;
    return (
      <React.Fragment>
        <form className="todoForm" onSubmit={this.handleSubmit}>
          <label className="todoLabel" htmlFor="Task Name">
            Task Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="todoInput"
            onChange={this.handleChange}
            placeholder="Task Name..."
          />
          <label className="todoLabel" htmlFor="Start Date">
            Date Started
          </label>
          <input
            type="date"
            name="start"
            value={start}
            className="todoInput"
            onChange={this.handleChange}
            placeholder="Start Date..."
          />
          <label className="todoLabel" htmlFor="Date Ended">
            Date Ending Approx.
          </label>
          <input
            type="date"
            name="end"
            value={end}
            className="todoInput"
            onChange={this.handleChange}
            placeholder="End Date..."
          />
          <label className="todoLabel" htmlFor="Time Spent">
            Time Spent in Hours
          </label>
          <input
            type="number"
            name="timeSpent"
            value={timeSpent}
            className="todoInput"
            onChange={this.handleChange}
            placeholder="Time Spent in hours..."
          />
          <button
            className="todoButton"
            onClick={this.handleSubmit}
            type="button"
          >
            Create Task List Item
          </button>
        </form>
        {error && (
          <h1 className="todoError">* Please Check for missing fields.</h1>
        )}
        {todoItems.length > 0 && (
          <TodoItems
            todoItems={todoItems}
            handleDelete={this.handleDelete}
            handleMarkComplete={this.handleMarkComplete}
          />
        )}
      </React.Fragment>
    );
  }
}

export default TodoForm;
