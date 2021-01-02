import { googleAuthProvider, firebase } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const loginWithEmailPassword = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(1, "Braian"));
    }, 1000);
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};
