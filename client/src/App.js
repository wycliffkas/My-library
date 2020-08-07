import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";
import Book from "./containers/Book";
import Author from "./containers/Author";
import Header from "./common/Header";


function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Switch>
          <Route path="/authors" component={Author} />
          <Route exact path="/" component={Book} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
