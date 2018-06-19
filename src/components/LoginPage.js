import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { startGoogleLogin, startEmailLogin } from '../actions/auth'
import { firebase } from '../firebase/firebase';

let email, password;

export const LoginPage = (
  {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    startGoogleLogin,
    startEmailLogin,
    dispatch
  }
) => (
  <div className="box-layout">
      <div className="box-layout__box">
          <div id="particles-js"></div>
          <div className="box-layout__part">
              <h1 className="box-layout__title">ExpenseMap</h1>
              <button onClick={startGoogleLogin} className="button box-layout__button">Login with Google</button>
          </div>
          <div className="box-layout__break"/>
          <div className="box-layout__part">
              <Form className="box-layout__form">
                <div>
                  { touched.email && errors.email && <p>{errors.email}</p> }
                  <Field
                      className="box-layout__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                  />
                </div>
                <div>
                  { touched.password && errors.password && <p>{errors.password}</p> }
                  <Field
                      className="box-layout__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                  />
                </div>
                  <button
                      className="button box-layout__button login-button"
                      disabled={isSubmitting}
                      /*disabled={true}*/
                      /*onClick={startEmailLogin}*/
                  >Login</button>
              </Form>
          </div>
          <div className="box-layout__break"/>
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
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Email not valid').required('Email is required'),
      password: Yup.string().min(6, 'Password must be 6 characters or longer').required('Password is required')
    }),
    handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
      firebase.auth().signInWithEmailAndPassword(values.email, values.password)
        .catch((e) => {
          if(e.code === 'auth/wrong-password') {
          } else {
          }
        })
        .then((result) => {
          setSubmitting = false;
          resetForm();
        });
    }
})(LoginPage);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(FormikApp);
