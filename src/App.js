import React, { Component } from 'react';
import { Route,  HashRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Login, Settings, Home, Tasks } from './screens';


class App extends Component {
  static defaultProps = {
    theme: 'dark',
    color: '#0088bb',
  }

  render() {
    const { replace, location, theme, color } = this.props; // eslint-disable-line

    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/settings" component={Settings} />
          <Route path="/home" component={Home} />
          <Route path="/tasks" component={Tasks} />
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
