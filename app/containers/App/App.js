import React, { PropTypes } from 'react';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/';

function App(props) {
  const childrenWithStoreProps = React.Children.map(
      props.children,
      (child) => React.cloneElement(child, ...props));
  return (
    <div>
      {childrenWithStoreProps}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

function mapStateToProps(state) {
  console.log(state)
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
