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
