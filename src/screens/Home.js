import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="nav">
          <Link to="/tasks" title="Tasks"><i className="fas fa-tasks"></i></Link>
          <Link to="#" title="Settings"><i className="fas fa-cog"></i></Link>
          <Link to="#" title="Edit Profile"><i className="fas fa-user"></i></Link>
          <Link to="#" title="Notifications"><i className="fas fa-bell"></i></Link>
          <Link to="/" title="Log Out"><i className="fas fa-sign-out-alt"></i></Link>
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
