import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Route to="/" render={props => <NavBar {...props} />} />
    </div>
  );
}

export default App;
