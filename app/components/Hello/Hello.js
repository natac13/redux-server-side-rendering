import React, { PropTypes } from 'react';
import { defaultProps } from 'recompose';

function Hello(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}

Hello.propTypes = {
  name: PropTypes.string,
};

export default defaultProps(
  {
    name: 'Sean Campbell',
  }
)(Hello);
