import React from "react";
import { Helmet } from "react-helmet";
import "./About.css";

const About = () => {
  return (
    <div className="about-parent">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="full-card">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="all-text-parent">
              <h5 className="about-text-h5">WELCOME TO MEDSERVICE</h5>
              <h2 className="about-text-h2">
                WORLD CLASS <br /> MEDICAL TREATMENT <br /> FOR YOUR FAMILY
              </h2>
              <ul className="about-p">
                <p>
                  <li>
                    MedServices has major campuses in Rochester, Minn.;
                    Scottsdale and Phoenix, Ariz. <br />
                    and Jacksonville, Fla. TheMedServicesHealth System has
                    dozens of locations
                  </li>
                </p>

                <p>
                  <li>
                    in several states. Thousands of patients from around the
                    world travel to
                  </li>
                </p>
                <p>
                  <li>
                    MedServices locations, MedServices International Patient
                    Offices help ensure that
                    <br />
                    distance and language are not obstacles to receiving
                    world-class care.
                  </li>
                </p>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="w-85"
              src={
                "https://jthemes.net/themes/html/medservices/files/images/image-06.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
