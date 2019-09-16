import React from "react";
import { Route } from "react-router-dom";
import "./app.css";

import NavBarLoggedIn from "./Components/NavBar-LoggedIn";
import NavBarLoggedOut from "./Components/NavBar-LoggedOut";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Acts from "./Components/Acts/Acts";
import Contacts from "./Components/Contacts/Contacts";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={NavBarLoggedOut} />
      <Route path="/register" exact component={NavBarLoggedOut} />
      <Route path="/login" exact component={NavBarLoggedOut} />
      <Route path="/" exact component={Home} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/register" render={props => <Register {...props} />} />

      <Route path="/welcome" exact component={NavBarLoggedIn} />
      <Route path="/contacts" component={NavBarLoggedIn} />
      <Route path="/acts" component={NavBarLoggedIn} />
      <Route path="/welcome" render={props => <Welcome {...props} />} />
      <Route path="/contacts" render={props => <Contacts {...props} />} />
      <Route path="/acts" render={props => <Acts {...props} />} />
    </div>
  );
}

export default App;
