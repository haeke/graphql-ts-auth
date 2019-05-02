This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Simple Todo Application

This todo list application lets a user create a task name, date started, date ending, and amount of time spent in hours. A user will be able to delete any tasks that they do not want to keep and they can mark a task complete by clicking on the mark complete button.

Project URL - https://haeke.github.io/list

## Technologies used

- React - Stateful and Presentaional Components
- TypeScript - type definitions and interfaces
  - TodoForm includes interfaces that define the TodoItem interface and State object
  - The TodoItem interface is an object that contains the id, name, start, end, timeSpent, completed and active properties.
  - The State object contains the id, name, start, end, timeSpent, completed and active and a todoItems array as properties.
  - The TodoItems component uses the TodoItem interface object.
- Local Storage is used to keep a local copy of your personal Todo List items in your browser.
- Semantic HTML5
- CSS3
- Flexbox
- Github Pages
