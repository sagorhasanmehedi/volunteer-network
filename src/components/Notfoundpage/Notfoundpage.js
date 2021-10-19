import React from "react";
import "./Notfoundpage.css";
import img from "../../images/2488754-ai.png";
import { useHistory } from "react-router";

const Notfoundpage = () => {
  const history = useHistory();
  const gohome = () => {
    history.push("/");
  };
  return (
    <div className="notfound-parent" style={{ backgroundImage: `url(${img})` }}>
      <button onClick={gohome} className="">
        Go Back
      </button>
    </div>
  );
};

export default Notfoundpage;
