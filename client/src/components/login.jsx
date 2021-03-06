import React, { Component } from 'react';
import AuthService from '../services/AuthService.js';

class Login extends Component {
  constructor(){
    super();
    this.Auth = AuthService;
    this.state = {
      error: false
    }
  }

  componentWillMount() {
    if (AuthService.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(() => {
        this.props.history.replace('/dashboard')
        this.setState({error: false})
        })
      .catch(err => {
        this.setState({error: true})
        console.error('err in handleFormSubmit', err)
      });
  }

  render() {
    return (
      <div className="login">
          <h3>Login</h3>
            <input
              className="form-item"
              placeholder="Email"
              name="email"
              type="text"
              autoComplete="email"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            <button onClick={this.handleFormSubmit}>SUBMIT</button>
            {
              this.state.error
              ? <div>Email/password invalid</div>
              : <div></div>
            }
      </div>
    );
  }
}

export default Login;
