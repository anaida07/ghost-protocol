import React from 'react';
// import asyncComponent from './../hoc/asyncComponent';
import './../style/Tasks.scss';
// const AsyncNav = asyncComponent(() => {
//   const enav = new (require('electron-navigation'))();
//   return enav.newTab('https://www.ibotta.com/')
// });


class Tasks extends React.Component {
  UNSAFE_componentWillMount() {
    console.log('aaaa');
    // const el = document.documentElement;
    // el.append('<script type="text/javascript">');
    // el.append('const enav = new (require("electron-navigation"))();')
    // el.append('enav.newTab("https://www.ibotta.com/")')
    // el.append('</script>')
    // console.log(el);

    // var script = document.createElement('script');
    // script.onload = function () {
    //   const enav = new (require('electron-navigation'))();
    //   enav.newTab('https://www.ibotta.com/')
    // };
    // script.onreadystatechange = function () {
    //   const enav = new (require('electron-navigation'))();
    //   enav.newTab('https://www.ibotta.com/')
    // };
    // el.appendChild(script);
    // debugger
    // window.test();
  }

  render() {
    return (
      <div className="toolbar">
        {/* <AsyncNav/> */}
        <div id="nav-body-tabs"></div>
        <div id="nav-body-ctrls"></div>
        <div id="nav-body-views"></div>
      </div>
    );
  }
}

export default Tasks;
