import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './FinishedQuiz.module.scss';
import Button from '../UI/Button/Button';

const FinishedQuiz = ({ results, quiz, onRetry }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    let counter = total;

    if (results[key] === 'success') {
      counter += 1;
    }

    return counter;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quizItem, index) => {
          const key = quizItem + index;
          const cls = [
            'fa',
            results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[results[quizItem.id]],
          ];

          return (
            <li key={key}>
              <strong>
                {index + 1}
              </strong>
              .
              &nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          );
        })}
      </ul>
      <p>
        Правильно&nbsp;
        {successCount}
        &nbsp;из&nbsp;
        {quiz.length}
      </p>
      <div>
        <Button onClick={onRetry} type="primary">Повторить</Button>
        <Link to="/">
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

FinishedQuiz.propTypes = {
  results: PropTypes.instanceOf(Object).isRequired,
  quiz: PropTypes.instanceOf(Array).isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default FinishedQuiz;