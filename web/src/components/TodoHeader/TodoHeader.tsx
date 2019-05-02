import React from "react";

import "./TodoHeader.css";

const TodoHeader: React.SFC<{ headerText: string }> = ({ headerText }) => {
  return (
    <header className="headerContainer">
      <h1 className="headerText">{headerText}</h1>
    </header>
  );
};

export default TodoHeader;
