import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startGoogleLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
            .catch((e) => {});
    };
};

export const startEmailLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((e) => {});
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
