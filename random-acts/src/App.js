import React from "react";
import { Route } from "react-router-dom";
import "./app.css";

import NavBarLoggedIn from "./Components/NavBar-LoggedIn";
import NavBarLoggedOut from "./Components/NavBar-LoggedOut";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={NavBarLoggedOut} />
      <Route path="/register" exact component={NavBarLoggedOut} />
      <Route path="/login" exact component={NavBarLoggedOut} />
      <Route path="/" exact component={Home} />

      <Route path="/welcome" exact component={NavBarLoggedIn} />
      <Route path="/contacts" component={NavBarLoggedIn} />
      <Route path="/acts" component={NavBarLoggedIn} />
    </div>
  );
}

export default App;
