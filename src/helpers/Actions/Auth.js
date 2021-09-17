import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth";

import { app } from "../Firebase/firebase-config";
import { authTypes } from "../Types/authTypes";

const auth = getAuth(app);
auth.languageCode = "it";

const googleProvider = new GoogleAuthProvider();

export const Login = (uid, displayName, token, mail) => {
  return {
    type: authTypes.login,
    payload: {
      uid: uid,
      accessToken: token,
      displayName: displayName,
      email: mail,
    },
  };
};

export const SignInWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(
          Login(user.uid, user.displayName, user.accessToken, user.email),
        );
      })
      .catch((error) => {
        //give feedback to users when login fails
      });
  };
};

export const SignInWithGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const credential = await GoogleAuthProvider.credentialFromResult(
          result,
        );
        const token = credential.accessToken;
        const user = result.user;
        dispatch(
          Login(user.uid, user.displayName, user.accessToken, user.email),
        );
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        //give feedback to users when login fails
      });
  };
};

export const Register = (email, password, displayName) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, { displayName: displayName, photoURL: null });
        dispatch(
          Login(user.uid, user.displayName, user.accessToken, user.email),
        );
      })
      .catch((err) => {});
  };
};
