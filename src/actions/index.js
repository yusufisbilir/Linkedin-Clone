import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export function signInApi() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}
