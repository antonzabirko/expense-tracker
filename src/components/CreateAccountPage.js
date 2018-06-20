import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import Recaptcha from 'react-recaptcha'
import { firebase } from '../firebase/firebase'

let firebaseError;

const CreateAccountPage = (
    {
        values,
        errors,
        touched,
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
                        { firebaseError && <p className="box-layout__error">{firebaseError}</p> }
                        { touched.email && errors.email && <p className="box-layout__error">{errors.email}</p> }
                        <Field
                            autoComplete="username"
                            className="box-layout__input"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                        { touched.password && errors.password && <p className="box-layout__error">{errors.password}</p> }
                        <Field
                            autoComplete="new-password"
                            className="box-layout__input"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        { touched.password && errors.password && <p className="box-layout__error">{errors.password}</p> }
                        <Field
                            autoComplete="new-password"
                            className="box-layout__input"
                            name="password"
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
                        <button className="button box-layout__button login-button box-layout__button-disabled">Sign Up!</button>
                    </Form>
                    <Link to="/" className="button button--link">Back</Link>
                </div>
            </div>
        </div>
            </div>
);

const FormikApp = withFormik({
    mapPropsToValues({ email, password}) {
        return {
            email: email || '',
            password: password || ''
        }
    },
    handleSubmit(values) {
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
})(CreateAccountPage);

export default connect()(FormikApp);
