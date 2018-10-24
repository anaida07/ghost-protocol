import React, { Component } from 'react';

class Login extends Component {
  render () {
    return(
      <div className="login">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="username"></input><br />
        <input type="password" name="password" placeholder="password"></input><br />
        <button>Login</button>
      </div>
    )
  }
}

export default Login;
