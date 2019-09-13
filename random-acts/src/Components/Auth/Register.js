import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      error: false
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  register = event => {
    event.preventDefault();
    const endpoint =
      "https://random-acts-webpt5.herokuapp.com/api/auth/register";
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };

    axios
      .post(endpoint, newUser)
      .then(res => {
        this.props.history.push("/login");
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };

  render() {
    return (
      <div>
        <h2>Register here!</h2>
        <form onSubmit={this.register}>
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
          <input
            onChange={this.inputHandler}
            type="text"
            placeholder="email"
            value={this.state.email}
            name="email"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
