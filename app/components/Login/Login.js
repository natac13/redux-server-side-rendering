/* eslint no-shadow: [2, { "allow": ["onSubmit"] }] */
import React, { PropTypes } from 'react';
import Promise from 'bluebird';
import { withProps, compose } from 'recompose';

import { reduxForm } from 'redux-form';

function Login(props) {
  console.log(props);
  const {
    fields: { name, email, password },
    handleSubmit,
    resetForm,
    submitting,
    onSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> Name </label>
      <input type="text" placeholder="natac" { ...name } />
      <label> Email </label>
      <input type="email" placeholder="example@gmail.com" { ...email } />
      <label> Password </label>
      <input type="password" placeholder="secret" { ...password } />
      <button type="submit" disabled={submitting}> Submit </button>
      <button type="button" disabled={submitting} onClick={resetForm}> Clear Form </button>
    </form>
  );
}

Login.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequried,
  submitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func,
};

function onSubmit(values) {
  return new Promise((resolve, reject) => {
    const { name, password, email } = values;
    // login user to the redux store via actions
    setTimeout(() => {
      console.log(`Logged in user with name: ${name}, password: ${password} and email: ${email}`);
      resolve();
    }, 1000);
  });
}

// using compose lets me author the onSubmit function in the global scope and
// then inject it into the component via props by using withProps()
export default compose(
  reduxForm({
    form: 'login',
    fields: ['name', 'email', 'password'],
  }),
  withProps(
    { onSubmit }
  ),
)(Login);
