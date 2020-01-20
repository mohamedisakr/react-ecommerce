import React, { useState, useEffect } from "react";
import { auth } from "./firebase/firebase.utils";

// https://stackoverflow.com/questions/58230638/how-to-convert-firebase-auth-class-component-lifecycle-to-hooks-useeffect-in-rea
function useAuthUser(props) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return currentUser;
}

export default useAuthUser;
