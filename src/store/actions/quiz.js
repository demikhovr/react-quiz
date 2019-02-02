import axios from '../../axios/axios-quiz';
import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_ERROR,
  QUIZ_SET_STATE,
  QUIZ_FINISH,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
} from './actionTypes';

export const fetchQuizesStart = () => ({
  type: FETCH_QUIZES_START,
});

export const fetchQuizesSuccess = quizes => ({
  type: FETCH_QUIZES_SUCCESS,
  quizes,
});

export const fetchQuizesError = err => ({
  type: FETCH_QUIZES_ERROR,
  error: err,
});

export const fetchQuizes = () => async (dispatch) => {
  dispatch(fetchQuizesStart());
  try {
    const response = await axios.get('/quizes.json');
    let { data } = response;

    if (!data) {
      data = [];
    }

    const quizes = Object.keys(data).map((id, index) => ({
      id,
      name: `Тест № ${index + 1}`,
    }));

    dispatch(fetchQuizesSuccess(quizes));
  } catch (err) {
    dispatch(fetchQuizesError(err));
  }
};

export const fetchQuizSuccess = quiz => ({
  type: FETCH_QUIZ_SUCCESS,
  quiz,
});

export const fetchQuizError = err => ({
  type: FETCH_QUIZ_ERROR,
  error: err,
});

export const fetchQuizById = id => async (dispatch) => {
  try {
    dispatch(fetchQuizesStart);
    const response = await axios.get(`/quizes/${id}.json`);
    const quiz = response.data;
    dispatch(fetchQuizSuccess(quiz));
  } catch (err) {
    dispatch(fetchQuizError(err));
  }
};

export const quizSetState = (answerState, results) => ({
  type: QUIZ_SET_STATE,
  answerState,
  results,
});

export const finishQuiz = () => ({
  type: QUIZ_FINISH,
});

export const quizNextQuestion = number => ({
  type: QUIZ_NEXT_QUESTION,
  number,
});

const isQuizFinished = state => state.activeQuestion + 1 === state.quiz.length;

export const quizAnswerClick = answerId => (dispatch, getState) => {
  const state = getState().quiz;
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

    dispatch(quizSetState({ [answerId]: 'success' }, results));

    const timeout = window.setTimeout(() => {
      if (isQuizFinished(state)) {
        dispatch(finishQuiz());
      } else {
        dispatch(quizNextQuestion(state.activeQuestion + 1));
      }

      window.clearTimeout(timeout);
    }, 1000);
  } else {
    results[question.id] = 'error';
    dispatch(quizSetState({ [answerId]: 'error' }, results));
  }
};

export const retryQuiz = () => ({
  type: QUIZ_RETRY,
});
