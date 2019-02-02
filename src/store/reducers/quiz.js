import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_ERROR,
  QUIZ_SET_STATE,
  QUIZ_FINISH,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
} from '../actions/actionTypes';

const initialState = {
  quizes: [],
  results: {},
  error: null,
  isFinished: false,
  activeQuestion: 0,
  answerState: null,
  quiz: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        quizes: action.quizes,
        loading: false,
      };
    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        quiz: action.quiz,
        loading: false,
      };
    case FETCH_QUIZ_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case QUIZ_SET_STATE:
      return {
        ...state,
        answerState: action.answerState,
        results: action.results,
      };
    case QUIZ_FINISH:
      return {
        ...state,
        isFinished: true,
      };
    case QUIZ_NEXT_QUESTION:
      return {
        ...state,
        activeQuestion: action.number,
        answerState: null,
      };
    case QUIZ_RETRY:
      return {
        ...state,
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
      };
    default:
      return state;
  }
};
