import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="nav">
          <Link to="#">Tasks</Link>
          <Link to="#">Settings</Link>
          <Link to="#">Edit Profile</Link>
          <Link to="#">Notifications</Link>
          <Link to="/">Logout</Link>
        </ul>

        <div className="main">
          <div className="left tasks"></div>
          <div className="right"></div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default Home;
