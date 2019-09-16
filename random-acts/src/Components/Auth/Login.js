import React from "react";
import axios from "axios";
import "../../css/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false,
      loggedIn: false
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = event => {
    event.preventDefault();
    this.setState({ loggedIn: true });
    const endpoint = "https://random-acts-webpt5.herokuapp.com/api/auth/login";
    const userLogin = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post(endpoint, userLogin)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("id", res.data.id);
        this.props.history.push("/welcome");
      })
      .catch(error => {
        this.setState({ error: true });
      });
  };

  render() {
    return (
      <div className="login">
        <h2>Log In</h2>
        <form onSubmit={this.login}>
          <input
            onChange={this.inputHandler}
            type="text"
            placeholder="username"
            value={this.state.username}
            name="username"
          />
          <input
            onChange={this.inputHandler}
            type="password"
            placeholder="password"
            value={this.state.password}
            name="password"
          />
          <button type="submit">Start Giving</button>
        </form>
      </div>
    );
  }
}

export default Login;
