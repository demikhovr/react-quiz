import { FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS } from '../actions/actionTypes';

const initialState = {
  quizes: [],
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
        quizes: action.quizes,
        loading: false,
      };
    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
