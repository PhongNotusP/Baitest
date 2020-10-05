import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from "./components/Body/Body";
import RandomImage from "./components/RandomImage/RandomImage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header />
            <RandomImage />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
