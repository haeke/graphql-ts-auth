import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
