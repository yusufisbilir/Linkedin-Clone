import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
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
