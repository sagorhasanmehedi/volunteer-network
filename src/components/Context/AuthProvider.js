import React, { createContext } from "react";
import UseApi from "../../Hook/UseApi";
import UseFirebase from "../../Hook/UseFirebase";

export const Mycontext = createContext();

const AuthProvider = ({ children }) => {
  const Api = UseApi();
  const Firebase = UseFirebase();

  const parentcontext = {
    Api,
    Firebase,
  };

  return (
    <Mycontext.Provider value={parentcontext}>{children}</Mycontext.Provider>
  );
};

export default AuthProvider;
