const redux = require('redux');

const initialState = {
  counter: 0,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        counter: state.counter + 1,
      };
    case 'SUB':
      return {
        counter: state.counter - 1,
      };
    case 'ADD_NUMBER':
      return {
        counter: state.counter + action.value,
      };
    default:
      break;
  }

  return state;
};

// Store
const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log('Subscribe', store.getState());
});

// Actions
const addCounter = {
  type: 'ADD',
};

const subCounter = {
  type: 'SUB',
};

const addNumberCounter = {
  type: 'ADD_NUMBER',
  value: 30,
};

store.dispatch(addCounter);
store.dispatch(subCounter);
store.dispatch(subCounter);
store.dispatch(addNumberCounter);
