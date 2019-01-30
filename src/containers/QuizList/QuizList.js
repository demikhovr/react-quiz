import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchQuizes } from '../../store/actions/quiz';
import classes from './QuizList.module.scss';
import Loader from '../../components/UI/Loader/Loader';

class QuizList extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchQuizes();
  }

  renderQuizes() {
    const { props } = this;

    if (props.quizes.length) {
      return props.quizes.map(({ id, name }) => (
        <li key={id}>
          <NavLink to={`/quiz/${id}`}>
            {name}
          </NavLink>
        </li>
      ));
    }

    return <li className={classes.empty}>Тесты не созданы</li>;
  }

  render() {
    const { props } = this;

    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          {props.loading && props.quizes.length !== 0
            ? <Loader />
            : (
              <ul>
                { this.renderQuizes() }
              </ul>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quizes: state.quiz.quizes,
  loading: state.quiz.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchQuizes: () => dispatch(fetchQuizes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
