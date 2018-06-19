import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin } from '../actions/auth';

class CreateAccountPage extends React.Component {
    onCreation = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    };
    render() {
        return (
        <div className="box-layout">
            <div className="box-layout__box">
                <div className="box-layout__part">
                    <h1 className="box-layout__title">Create Account</h1>
                </div>
                <div className="box-layout__break"></div>
                <div className="box-layout__part">
                    <form className="box-layout__form">
                        <input
                            className="box-layout__input"
                            placeholder="email"
                            type="text"
                        />
                        <input
                            className="box-layout__input"
                            placeholder="password"
                            type="text"
                        />
                        <input
                            className="box-layout__input"
                            placeholder="confirm password"
                            type="text"
                        />
                    </form>
                    <button className="button box-layout__button login-button">Sign Up!</button>
                </div>
            </div>
        </div>
    )};
}
/*<input type="text" placeholder="username"/>
  <input type="text" placeholder="password"/>*/

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(CreateAccountPage);
