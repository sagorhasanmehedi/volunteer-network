import React from "react";
import "./Signin.css";
import { useForm } from "react-hook-form";
import UseFirebase from "../../Hook/UseFirebase";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Signin = () => {
  const { googlesignin, usersignin, setemail, setpassword } = UseFirebase();

  // react hook form
  const {
    register,
    formState: { errors },
  } = useForm();

  // for redirect login
  const history = useHistory();
  const location = useLocation();
  const redirect_URL = location.state?.from || "/home";

  // redirect login for google
  const redirectlogin = () => {
    googlesignin()
      .then((result) => {
        localStorage.setItem("email", result.user.email);
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // get user password
  const getpassword = (e) => {
    setpassword(e.target.value);
  };

  // get user email
  const getemail = (e) => {
    setemail(e.target.value);
  };

  // redirect signin
  const redirecrsignin = () => {
    usersignin()
      .then((result) => {
        localStorage.setItem("email", result.user.email);
        history.push(redirect_URL);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log("from redirect log in");
  };
  return (
    <div className="signin-parent">
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
            <h3>Sign In</h3>
          </div>

          <input
            className="form-input"
            type="email"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            onBlur={getemail}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            onBlur={getpassword}
          />

          <input
            onClick={redirecrsignin}
            className="form-button"
            type="submit"
          />
          <p className="Or">Or</p>
          <div className="form-span">
            <hr />
          </div>
          <button onClick={redirectlogin} className="form-button-google">
            Google
          </button>
          <Link to="/signup" className="new-user">
            <h6>New User ?</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
