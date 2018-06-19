import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withFormik } from 'formik'
import Yup from 'yup'
import { startGoogleLogin, startEmailLogin } from '../actions/auth'

let email, password;

export const LoginPage = ({ values, handleChange, startGoogleLogin, startEmailLogin }, {  }) => (
  <div className="box-layout">
      <div className="box-layout__box">
          <div id="particles-js"></div>
          <div className="box-layout__part">
              <h1 className="box-layout__title">ExpenseMap</h1>
              <button onClick={startGoogleLogin} className="button box-layout__button">Login with Google</button>
          </div>
          <div className="box-layout__break"></div>
          <div className="box-layout__part">
              <form className="box-layout__form">
                  <input
                      className="box-layout__input"
                      disabled={true}
                      name="email"
                      onChange={handleChange}
                      placeholder="email"
                      type="email"
                      value={values.email}
                  />
                  <input
                      className="box-layout__input"
                      disabled={true}
                      placeholder="password"
                      type="text"
                  />
              </form>
              <button
                  className="button box-layout__button login-button"
                  disabled={true}
                  onClick={startEmailLogin}
              >Login</button>
          </div>
          <div className="box-layout__break"></div>
          <div className="box-layout__part">
              <Link
                    className="button box-layout__button box-layout__button-disabled"
                    to="/"
                    disabled={true}
                >
                      Create a New Account
              </Link>
          </div>
      </div>
  </div>
);

const FormikApp = withFormik({
    mapPropsToValues({ email }) {
        return {
            email: email || ''
        }
    }
})(LoginPage);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startEmailLogin: () => dispatch(startEmailLogin())
});

export default connect(undefined, mapDispatchToProps)(FormikApp);
