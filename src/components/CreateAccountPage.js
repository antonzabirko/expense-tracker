import React from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, withFormik } from 'formik';
import Recaptcha from 'react-recaptcha';
import * as Yup from 'yup';
import { firebase } from '../firebase/firebase';

let firebaseError;

const CreateAccountPage = (
  {
    values,
    errors,
    touched,
    setSubmitting,
    isSubmitting,
    handleChange,
  }
) => (
  <div className="box-layout">
    <div className="box-layout__color-bar"></div>
    <div className="box-layout">
      <div className="box-layout__box">
        <div className="box-layout__part">
          <h1 className="box-layout__title">Create Account</h1>
        </div>
        <div className="box-layout__break"></div>
        <div className="box-layout__part">
          <Form className="box-layout__form">
            {firebaseError && <p className="box-layout__error">{firebaseError}</p>}
            {touched.email && errors.email && <p className="box-layout__error">{errors.email}</p>}
            <Field
              autoComplete="username"
              className="box-layout__input"
              name="email"
              placeholder="Email"
              type="email"
            />
            {touched.password && errors.password &&
            <p className="box-layout__error">{errors.password}</p>}
            <Field
              autoComplete="new-password"
              className="box-layout__input"
              name="password"
              placeholder="Password"
              type="password"
            />
            {touched.confirmPassword && errors.confirmPassword &&
            <p className="box-layout__error">{errors.confirmPassword}</p>}
            <Field
              autoComplete="new-password"
              className="box-layout__input"
              name="confirmPassword"
              placeholder="Confirm password"
              type="password"
            />
            <div className="g-recaptcha">
              <Recaptcha
                className="box-layout__input g-recaptcha"
                sitekey="6LdhzV8UAAAAAMhqlyqL-6tN5bI1SWfHdHOc9KVy"
                theme="light"
              />
            </div>
            <button className="button box-layout__button login-button">Sign Up!</button>
          </Form>
          <Link to="/" className="button button--link">Back</Link>
        </div>
      </div>
    </div>
  </div>
);

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be 6 characters or longer').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords don't match").required('Confirm Password is required'),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    if (grecaptcha && grecaptcha.getResponse().length > 0) {
      firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
        })
        .then(() => {
          setSubmitting = false;
          resetForm();
          history.push('/dashboard');
        });
    } else {
      firebaseError = 'Please process the Recaptcha.';
    }
  },
})(CreateAccountPage);

export default FormikApp;
