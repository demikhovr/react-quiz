import React, { Component } from 'react';
import classes from './Quiz.module.scss';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
    };
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
      </div>
    );
  }
}

export default Quiz;
