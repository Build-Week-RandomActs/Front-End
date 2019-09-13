import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import NavBarLoggedIn from "./Components/NavBar-LoggedIn";
import NavBarLoggedOut from "./Components/NavBar-LoggedOut";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={NavBarLoggedOut} />
      <Route path="/register" exact component={NavBarLoggedOut} />
      <Route path="/login" exact component={NavBarLoggedOut} />

      <Route path="/welcome" exact component={NavBarLoggedIn} />
      <Route path="/contacts" component={NavBarLoggedIn} />
      <Route path="/acts" component={NavBarLoggedIn} />
    </div>
  );
}

export default App;
