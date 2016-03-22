import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers(Object.assign(
  {},
  {
    counter,
  }
));

export default rootReducer;
