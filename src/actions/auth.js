import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInWithRedirect(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};