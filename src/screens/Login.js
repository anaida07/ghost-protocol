import React from 'react';
import './../style/App.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.logUser = this.logUser.bind(this);
  }

  logUser(e) {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="login">
        <img src="cf-separated-logo.png" alt="CloudFactory" width="300" className="logo"></img><br />
        <input type="text" name="username" placeholder="Username"></input><br />
        <input type="password" name="password" placeholder="Password"></input><br />
        <button onClick={this.logUser}>Login</button>
      </div>
    );
  }
}

export default Login;
