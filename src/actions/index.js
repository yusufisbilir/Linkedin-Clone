import { auth, provider, storage, db } from '../firebase';
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import {
  collection,
  addDoc,
  query,
  getDocs,
  orderBy,
} from 'firebase/firestore';

import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from './actionType';

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
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

export function postArticleApi(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (payload.image !== '') {
      const storageRef = ref(storage, `images/${payload.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, payload.image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log(`Progress: ${progress}%`);
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log('upload error');
        },
        async () => {
          // Handle successful uploads on complete
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addDoc(collection(db, 'articles'), {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              video: payload.video,
              sharedImg: downloadURL,
              comments: 0,
              description: payload.description,
            });
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      addDoc(collection(db, 'articles'), {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: '',
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticlesApi() {
  return async (dispatch) => {
    let payload;
    const articlesRef = collection(db, 'articles');
    const q = query(articlesRef, orderBy('actor.date'));
    const querySnapshot = await getDocs(q);
    payload = await querySnapshot.docs.map((doc) => doc.data());
    dispatch(getArticles(payload));
  };
}
