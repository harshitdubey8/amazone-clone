import React, { useState } from "react";
import "./App.css";
import Header from "./header";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./checkout";

function App() {
  const [title, setTitle] = useState("");
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
