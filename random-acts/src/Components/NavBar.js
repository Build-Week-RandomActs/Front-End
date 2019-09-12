import React from "react";
import { NavLink, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Contacts from "./Contacts/Contacts";
import Acts from "./Acts/Acts";
import Welcome from "./Welcome";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return this.state.loggedIn ? (
      <div>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/acts">Acts</NavLink>
        <NavLink to="/logout">Log Out</NavLink>

        <Route path="/welcome" render={props => <Welcome {...props} />} />
        <Route path="/contacts" render={props => <Contacts {...props} />} />
        <Route path="/acts" render={props => <Acts {...props} />} />
      </div>
    ) : (
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/register">Register</NavLink>

        <Route path="/" exact component={Home} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
      </div>
    );
  }
}

export default NavBar;
