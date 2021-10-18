import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config.firebase";

const Initializefirebase = () => {
  initializeApp(firebaseConfig);
};

export default Initializefirebase;
