import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Login } from "../helpers/Actions/Auth";
import { useDispatch } from "react-redux";

export const useOnSignedIn = () => {
  const dispatch = useDispatch();
  const [loged, setLoged] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(Login(user.uid, user.displayName, user.email));
        setLoged(true);
      } else {
        setLoged(false);
      }
    });
  }, []);

  return loged;
};
