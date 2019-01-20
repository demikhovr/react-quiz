import React, { Component } from 'react';
import classes from './Layout.module.scss';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };

    this.menuToggleHandler = this.menuToggleHandler.bind(this);
    this.menuCloseHandler = this.menuCloseHandler.bind(this);
  }

  menuToggleHandler() {
    this.setState(prevState => ({ menu: !prevState.menu }));
  }

  menuCloseHandler() {
    this.setState({ menu: false });
  }

  render() {
    const { state, props } = this;

    return (
      <div className={classes.Layout}>
        <Drawer isOpen={state.menu} onClose={this.menuCloseHandler} />
        <MenuToggle onToggle={this.menuToggleHandler} isOpen={state.menu} />
        <main>
          {props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
