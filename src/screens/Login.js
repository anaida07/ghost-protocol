import React from 'react';
import { View } from 'react-desktop/windows';

class Login extends React.Component {
  render() {
    return (
      <View layout="vertical">
        <div className="login">
          <h2>Login</h2>
          <input type="text" name="username" placeholder="username"></input><br />
          <input type="password" name="password" placeholder="password"></input><br />
          <button>Login</button>
        </div>
      </View>
    );
  }
}

export default Login;
