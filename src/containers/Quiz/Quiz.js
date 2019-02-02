import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import { fetchQuizById, quizAnswerClick, retryQuiz } from '../../store/actions/quiz';

class Quiz extends Component {
  async componentDidMount() {
    const { props } = this;
    const { id } = props.match.params;
    props.fetchQuizById(id);
  }

  componentWillUnmount() {
    const { props } = this;
    props.retryQuiz();
  }

  render() {
    const { props } = this;

    const getQuiz = () => (props.isFinished
      ? (
        <FinishedQuiz
          results={props.results}
          quiz={props.quiz}
          onRetry={props.retryQuiz}
        />
      )
      : (
        <ActiveQuiz
          question={props.quiz[props.activeQuestion].question}
          answers={props.quiz[props.activeQuestion].answers}
          onAnswerClick={props.quizAnswerClick}
          answerNumber={props.activeQuestion + 1}
          quizLength={props.quiz.length}
          state={props.answerState}
        />
      ));

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {props.loading || !props.quiz
            ? <Loader />
            : getQuiz()
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.quiz.results,
  isFinished: state.quiz.isFinished,
  activeQuestion: state.quiz.activeQuestion,
  answerState: state.quiz.answerState,
  quiz: state.quiz.quiz,
  loading: state.quiz.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchQuizById: id => dispatch(fetchQuizById(id)),
  quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
  retryQuiz: () => dispatch(retryQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
