import React, { Component } from 'react';
import classes from './Layout.module.scss';

class Layout extends Component {
  render() {
    const { props } = this;

    return (
      <div className={classes.Layout}>
        <main>
          {props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
