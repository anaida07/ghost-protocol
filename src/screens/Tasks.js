import React from 'react';
import './../style/Tasks.scss';


class Tasks extends React.Component {
  render() {
    return (
      <div className="toolbar">
        <div id="nav-body-tabs"></div>
        <div id="nav-body-ctrls"></div>
        <div id="nav-body-views"></div>
      </div>
    );
  }
}

export default Tasks;
