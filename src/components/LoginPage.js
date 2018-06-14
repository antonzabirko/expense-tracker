import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <form>
      <button onClick={startLogin}>Login</button>
    </form>
  </div>
);
/*<input type="text" placeholder="username"/>
  <input type="text" placeholder="password"/>*/

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);