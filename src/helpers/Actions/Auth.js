import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { GoogleAuthProvider } from '@firebase/auth';

import { app } from '../Firebase/firebase-config';
import { authTypes } from '../Types/authTypes';

const auth = getAuth(app);
auth.languageCode = 'it';
const googleProvider = new GoogleAuthProvider();

export const Login = (uid, displayName, mail, photoURL) => {
  return {
    type: authTypes.login,
    payload: {
      uid: uid,
      displayName: displayName,
      email: mail,
      photoURL: photoURL,
      loged: true,
    },
  };
};

export const Logout = () => {
  signOut(auth);
  return (dispatch) => {
    dispatch({
      type: authTypes.logout,
      payload: {
        loged: false,
      },
    });
  };
};

export const SignInWithEmailAndPassword = (
  email,
  password,
  onErrorCallback = (error) => null,
) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(Login(user.uid, user.displayName, user.email, user.photoURL));
      })
      .catch((err) => {
        onErrorCallback(err);
      });
  };
};

export const SignInWithGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const user = result.user;
        dispatch(Login(user.uid, user.displayName, user.email, user.photoURL));
      })
      .catch(() => {});
  };
};

export const Register = (email, password, displayName) => {
  return async (dispatch) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: displayName, photoURL: null });
        dispatch(Login(user.uid, user.displayName, user.email, user.photoURL));
      })
      .catch(() => {});
  };
};

export const updateUserProfile = (
  displayName = auth.currentUser.displayName,
  photoURL = auth.currentUser.photoURL,
) => {
  return async (dispatch) => {
    await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        const name = auth.currentUser.displayName;
        const photo = auth.currentUser.photoURL;
        dispatch(
          Login(auth.currentUser.uid, name, auth.currentUser.email, photo),
        );
      })
      .catch(() => {});
  };
};
