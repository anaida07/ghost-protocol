import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { matchPath, withRouter } from 'react-router';
import {
  Window,
  TitleBar,
  NavPane,
  NavPaneItem,
} from 'react-desktop/windows';

import { Login, Settings } from './screens';
import * as Icons from './assets/icons';


const routes = [{
  path: '/',
  exact: true,
  title: 'Login',
  icon: Icons.welcomeIcon,
  component: Login,
}, {
  path: '/settings',
  title: 'Settings',
  icon: Icons.formIcon,
  component: Settings,
}];


class App extends Component {
  static defaultProps = {
    theme: 'dark',
    color: '#0088bb',
  }

  render() {
    const { replace, location, theme, color } = this.props; // eslint-disable-line

    return (
      <Window theme={theme} color={color}>
        <TitleBar title="My Windows Application" controls />
        <NavPane openLength={200} push theme={theme} color={color}>
          {routes.map(route => (
            <NavPaneItem
              key={route.path}
              title={route.title}
              icon={route.icon}
              selected={Boolean(matchPath(location.pathname, route.path, {
                exact: route.exact, strict: route.strict,
              }))}
              onSelect={() => {
                this.props.history.push(route.path);
                // replace(route.path);
              }}
              color={color}
              background="#ffffff"
              theme="light"
              padding="10px 20px"
              push
            >
              <Route exact={route.exact} path={route.path} component={route.component} />
            </NavPaneItem>
          ))}
        </NavPane>
      </Window>
    );
  }
}

export default withRouter(App);
