import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Signup.css";
import UseAuth from "../../Hook/UseAuth";
import doctorimg from "../../images/doctor-with-co-workers-analyzing-x-ray.jpg";

const Signup = () => {
  const { googlesignin, createuseraccount, setemail, setpassword } =
    UseAuth().Firebase;

  const {
    formState: { errors },
  } = useForm();

  // for redirect login
  const history = useHistory();
  const location = useLocation();
  const redirect_URL = location.state?.from || "/home";

  // redirect google login
  const googleredirect = () => {
    googlesignin()
      .then((result) => {
        localStorage.setItem("email", result.user.email);
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // get user email
  const getemail = (e) => {
    setemail(e.target.value);
  };

  // get user password
  const getpassword = (e) => {
    setpassword(e.target.value);
  };

  // create user account
  const createuseranewaccount = () => {
    createuseraccount()
      .then((result) => {
        localStorage.setItem("email", result.user.email);
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      className="signin-parent"
      style={{ backgroundImage: `url(${doctorimg})` }}
    >
      <div className="for-overlay">
        <div className="main-form">
          <div className="secend-parent">
            <div className="form-img">
              <img
                src={
                  "https://jthemes.net/themes/html/medservices/files/images/logo.png"
                }
                alt=""
                srcset=""
              />
              <h3>Sign Up</h3>
            </div>
            <input
              className="form-input"
              type="text"
              placeholder="First name"
            />

            <input
              className="form-input"
              type="email"
              placeholder="Email"
              onBlur={getemail}
            />
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              onBlur={getpassword}
            />

            <input
              onClick={createuseranewaccount}
              className="form-button"
              type="submit"
            />

            <p className="Or">Or</p>
            <div className="form-span">
              <hr />
            </div>
            <button onClick={googleredirect} className="form-button-google">
              Google
            </button>
            <Link to="/signin" className="new-user">
              <h6>Already Have An Account ?</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
