import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = uid => ({
  type: 'LOGIN',
  uid,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const startEmailLogin = ((email, password) => (
  () => firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((e) => {})
));

export const startGoogleLogin = (() => (
  () => firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .catch((e) => {})
));

export const startLogout = (() => (
  () => firebase
    .auth()
    .signOut()
));
