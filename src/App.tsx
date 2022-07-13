import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Browse from "./views/Browse";
import Companies from "./views/Companies";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Tickets from "./views/Tickets";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tickets">
          <Tickets />
        </Route>
        <Route path="/companies">
          <Companies />
        </Route>
        <Route path="/browse/:name">
          <Browse />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
