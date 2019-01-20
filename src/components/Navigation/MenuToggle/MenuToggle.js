/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './MenuToggle.module.scss';

const MenuToggle = ({ onToggle, isOpen }) => {
  const cls = [
    classes.MenuToggle,
    'fa',
  ];

  if (isOpen) {
    cls.push('fa-times');
    cls.push(classes.open);
  } else {
    cls.push('fa-bars');
  }

  return (
    <i
      className={cls.join(' ')}
      onClick={onToggle}
    />
  );
};

MenuToggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuToggle;
