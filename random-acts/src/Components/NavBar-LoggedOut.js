import React from "react";
import { NavLink, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

class NavBarLoggedOut extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
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

export default NavBarLoggedOut;
