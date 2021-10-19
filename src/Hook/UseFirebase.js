import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Initializefirebase from "../Firebase/Init.firebase";
Initializefirebase();

const UseFirebase = () => {
  const [user, setuser] = useState({});
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const auth = getAuth();
  console.log(user);

  //   google sign in
  const googlesignin = () => {
    const googleprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleprovider);
  };

  // Create a password-based account
  const createuseraccount = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const usersignin = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // on user state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
      }
    });
  }, []);

  // sign out
  const signout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("email");
        setuser({});
      })
      .catch((error) => {
        seterror(error.message);
      });
  };

  return {
    user,
    setemail,
    setpassword,
    signout,
    setuser,
    error,
    seterror,
    googlesignin,
    createuseraccount,
    usersignin,
  };
};

export default UseFirebase;
