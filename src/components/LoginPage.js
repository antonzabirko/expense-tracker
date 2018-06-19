import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
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
              <Form className="box-layout__form">
                  <Field
                      className="box-layout__input"
                      /*disabled={true}*/
                      name="email"
                      onChange={handleChange}
                      placeholder="email"
                      type="email"
                      value={values.email}
                  />
                  <Field
                      className="box-layout__input"
                      /*disabled={true}*/
                      name="password"
                      onChange={handleChange}
                      placeholder="password"
                      type="text"
                      value={values.password}
                  />
                  <button
                      className="button box-layout__button login-button"
                      /*disabled={true}*/
                      /*onClick={startEmailLogin}*/
                  >Login</button>
              </Form>
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
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        }
    },
    handleSubmit(values) {
        console.log(values.email);
        startEmailLogin(values.email, values.password)
    }
})(LoginPage);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(FormikApp);
