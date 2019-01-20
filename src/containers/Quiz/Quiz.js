import React, { Component } from 'react';
import classes from './Quiz.module.scss';
import axios from '../../axios/axios-quiz';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
      quiz: [],
      loading: true,
    };
    this.onAnswerClickHandler = this.onAnswerClickHandler.bind(this);
    this.onRetryHandler = this.onRetryHandler.bind(this);
  }

  async componentDidMount() {
    const { props } = this;
    const { id } = props.match.params;
    const response = await axios.get(`/quizes/${id}.json`);
    const quiz = response.data;
    this.setState({
      quiz,
      loading: false,
    });
  }

  onAnswerClickHandler(answerId) {
    const { state } = this;
    const { results } = state;
    const question = state.quiz[state.activeQuestion];

    if (state.answerState) {
      const key = Object.keys(state.answerState)[0];

      if (state.answerState[key] === 'success') {
        return;
      }
    }

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true });
        } else {
          this.setState(prevState => ({
            activeQuestion: prevState.activeQuestion + 1,
            answerState: null,
          }));
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = 'error';

      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      });
    }
  }

  onRetryHandler() {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
    });
  }

  isQuizFinished() {
    const { state } = this;
    return state.activeQuestion + 1 === state.quiz.length;
  }

  render() {
    const { state } = this;

    const getQuiz = () => (state.isFinished
      ? (
        <FinishedQuiz
          results={state.results}
          quiz={state.quiz}
          onRetry={this.onRetryHandler}
        />
      )
      : (
        <ActiveQuiz
          question={state.quiz[state.activeQuestion].question}
          answers={state.quiz[state.activeQuestion].answers}
          onAnswerClick={this.onAnswerClickHandler}
          answerNumber={state.activeQuestion + 1}
          quizLength={state.quiz.length}
          state={state.answerState}
        />
      ));

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {state.loading
            ? <Loader />
            : getQuiz()
          }
        </div>
      </div>
    );
  }
}

export default Quiz;
