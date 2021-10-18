import React from "react";
import "./Solutions.css";

const Solutions = () => {
  return (
    <div className="solution-parent ">
      <div className="container">
        <div className="solution row">
          <div className="col-lg-6">
            <img
              src={
                "https://jthemes.net/themes/html/medservices/files/images/image-03.png"
              }
              alt=""
            />
          </div>
          <div className="col-lg-6 my-auto">
            <span className="welcome-medservices">WELCOME TO MEDSERVICE</span>
            <h3 className="complete-medical">
              Complete Medical <br /> Solutions in One Place
            </h3>
            <p className="welcome-p">
              Welcome to MedServices Green Specialist Centre’s website.
              Kensington
              <br /> a multi-disciplinary, private hospital located in Iskandar
              Puteri, Johor, <br /> Malaysia. Officially opened in December
              2019, we are fully equipped <br /> with 80 general and acute care
              beds and provide a Green is
              <br />
              comprehensive range of clinical specialties as well as ancillary
              services <br /> including rehabilitation therapy and imaging
              services.
            </p>
            <p className="sign">Randon Pexon, Head of Clinic</p>
            <img
              src={
                "https://jthemes.net/themes/html/medservices/files/images/signature.png"
              }
              alt=""
              className="sign-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
