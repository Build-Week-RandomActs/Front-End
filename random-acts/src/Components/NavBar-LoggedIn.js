import React from "react";
import { NavLink, Route } from "react-router-dom";

import Contacts from "./Contacts/Contacts";
import Acts from "./Acts/Acts";
import Welcome from "./Welcome";

class NavBarLoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/acts">Acts</NavLink>
        <NavLink to="/logout">Log Out</NavLink>

        <Route path="/welcome" render={props => <Welcome {...props} />} />
        <Route path="/contacts" render={props => <Contacts {...props} />} />
        <Route path="/acts" render={props => <Acts {...props} />} />
      </div>
    );
  }
}

export default NavBarLoggedIn;
