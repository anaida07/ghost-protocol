import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.logUser = this.logUser.bind(this);
  }

  logUser(e) {
    this.props.history.push('/settings');
  }

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="username"></input><br />
        <input type="password" name="password" placeholder="password"></input><br />
        <button onClick={this.logUser}>Login</button>
      </div>
    );
  }
}

export default Login;
