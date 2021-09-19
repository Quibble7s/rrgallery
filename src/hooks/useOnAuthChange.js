import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Login } from "../helpers/Actions/Auth";
import { useDispatch } from "react-redux";

export const useOnAuthChange = () => {
  const dispatch = useDispatch();
  const [loged, setLoged] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(Login(user.uid, user.displayName, user.email));
        setLoged(true);
      } else {
        setLoged(false);
      }
    });
  }, [auth, dispatch]);

  return loged;
};
