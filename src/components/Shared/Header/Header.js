import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import UseAuth from "../../../Hook/UseAuth";
import "./Header.css";

const Header = () => {
  const { user, signout, error } = UseAuth().Firebase;
  const history = useHistory();

  // sign in button
  const gosignin = () => {
    history.push("/signin");
  };
  // sign up button
  const gosignup = () => {
    history.push("/signup");
  };
  return (
    <div className="header-parent ">
      <div className="nav-bar  container">
        <div className="nav-img">
          {" "}
          <img
            src={
              "https://jthemes.net/themes/html/medservices/files/images/logo.png"
            }
            alt=""
            srcset=""
          />
        </div>

        <div className="nav-text">
          {error && <span className="show-error">{error}</span>}
          <span className="show-name">{user.displayName}</span>
          <NavLink to="/">
            <a href="u">Home</a>
          </NavLink>
          <NavLink className="navlink-hidentext" to="/about">
            <a href="u">About</a>
          </NavLink>
          <NavLink className="navlink-hidentext" to="/chart">
            <a href="u">Chart</a>
          </NavLink>
          <NavLink className="navlink-hidentext" to="/map">
            <a href="u">map</a>
          </NavLink>
          {user.email ? (
            <button onClick={signout} className="nav-button">
              Sign Out
            </button>
          ) : (
            <button onClick={gosignin} className="nav-button">
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
