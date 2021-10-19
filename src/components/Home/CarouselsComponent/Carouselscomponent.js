import React from "react";
import "./Carouselcomponent.css";
import img from "../../../images/nurse-measuring-patient-blood-pressure.jpg";

const Carouselscomponent = () => {
  return (
    <div className="big-image" style={{ backgroundImage: `url(${img})` }}>
      <div className="overlay">
        <h1>
          Highest Quality <br /> Medical Treatment
        </h1>
        <p>
          U.S. News & World Report has again recognized MedServices as the No. 1{" "}
          <br />
          hospital overall and top ranked in fourteen specialties. Complex care{" "}
          <br />
          often requires medical experts from more than one specialty. With{" "}
          <br />
          world-class experts working together across specialties to give you{" "}
          <br />
          the unparalleled care you deserve, MedServices is a destination for{" "}
          <br />
          all who need certainty, options and hope. MedServices care is covered{" "}
          <br />
          by most insurance plans. Scroll to learn more
        </p>
      </div>
    </div>
  );
};

export default Carouselscomponent;
