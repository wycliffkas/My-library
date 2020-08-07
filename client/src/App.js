import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";
import Book from "./containers/Book";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Switch>
          <Route path="/" component={Book} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
