import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Login, Logout } from "../helpers/Actions/Auth";
import { useDispatch } from "react-redux";

export const useOnAuthChange = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    async function onAuth() {
      await onAuthStateChanged(auth, async (user) => {
        if (user) {
          await dispatch(
            Login(user.uid, user.displayName, user.email, user.photoURL),
          );
        } else {
          await dispatch(Logout());
        }
      });
    }
    onAuth();
  }, [auth, dispatch]);
};
