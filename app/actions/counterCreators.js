import {
  COUNTER_SET,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
} from '../constants/';

import { createAction } from 'redux-actions';

export const counterSet = createAction(COUNTER_SET);
export const counterIncrement = createAction(COUNTER_INCREMENT);
export const counterDecrement = createAction(COUNTER_DECREMENT);
