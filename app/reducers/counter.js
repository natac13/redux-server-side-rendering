import { Map } from 'immutable';

import {
  COUNTER_SET,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
} from '../constants/';

const initialState = Map({
  count: 0,
  testing: 'hello world',
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_SET:
      return state.set('count', action.payload);
    case COUNTER_INCREMENT:
      return state.update('count', (count) => count + 1);
    case COUNTER_DECREMENT:
      return state.update('count', (count) => count - 1);
    default:
      return state;
  }
}

export default counterReducer;
