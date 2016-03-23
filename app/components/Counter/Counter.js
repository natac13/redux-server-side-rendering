import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { pure } from 'recompose';

function Counter(props) {
  const { actions, counter } = props;
  const count = counter.get('count');
  return (
    <div className="wrapper">
      <p>{count}</p>
      <button type="button" onClick={actions.counterIncrement}>Increment Count</button>
      <button type="button" onClick={actions.counterDecrement}>Decrement Count</button>
    </div>
  );
}

Counter.propTypes = {
  counter: ImmutablePropTypes.map,
  actions: PropTypes.object,
};

export default pure(Counter);
