import { useContext } from "react";
import { Mycontext } from "../components/Context/AuthProvider";

const UseAuth = () => {
  return useContext(Mycontext);
};

export default UseAuth;
