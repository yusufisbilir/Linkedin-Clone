import { auth, provider } from '../firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { SET_USER } from './actionType';

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInApi() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutApi() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}
