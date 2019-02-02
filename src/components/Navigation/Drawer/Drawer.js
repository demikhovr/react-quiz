import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Drawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { props } = this;
    props.onClose();
  }

  renderLinks(links) {
    return links.map((link, index) => {
      const key = link.label + index;
      return (
        <li key={key}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const { props } = this;
    const cls = [classes.Drawer];

    if (!props.isOpen) {
      cls.push(classes.close);
    }

    const links = [
      { to: '/', label: 'Список', exact: true },
    ];

    if (props.isAuthenticated) {
      links.push({ to: '/quiz-creator', label: 'Создать тест', exact: false });
      links.push({ to: '/logout', label: 'Выйти', exact: false });
    } else {
      links.push({ to: '/auth', label: 'Авторизация', exact: false });
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            { this.renderLinks(links) }
          </ul>
        </nav>
        {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
