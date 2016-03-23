import React, { PropTypes } from 'react';
import { lifecycle, getContext, compose } from 'recompose';
import { connect } from 'react-redux';

function Profile(props) {
  return (
    <p> You should not be here </p>
  );
}

function setup(component) {
  // Called in the constructor function of the Higher Order Component (HOC)

  // the getContext will take context.router and place it on props
  // context.router is where all the history function are located.
  // I would not be concerned with this if I was using react-redux-router
  if (component.props.counter.get('count') === 3) {
    // a simulated redirect from not being logged in. For this demo is happens
    // when the count is equal to 3
    component.props.router.push('/login');
  }
}
function teardown(component) {
  // for componentWillUnmount
  console.log('teardown');
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

// I did a small test by reversing the getContext and lifecycle
// it seems the component Profile goes from top to bottom since the other way
// makes an error of cannot read property 'push' of undefined. Referring to
// component.props.router.push()
// therefore I am going to assume the connect to Redux has to be first in order
// to valid the user authentication.
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  // moves the context.router to props.router
  // for context to exist there need to be the contentTypes which this is
  getContext(
    { router: PropTypes.object.isRequired }
  ),
  lifecycle(
    setup,
    teardown,
  ),
)(Profile);
