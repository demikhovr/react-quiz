import axios from '../../axios/axios-quiz';
import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR } from './actionTypes';

export const fetchQuizesState = () => ({
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
  dispatch(fetchQuizesState());
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
  } catch (e) {
    dispatch(fetchQuizesError(e));
  }
};
