import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carouselcomponent.css";
import doctor1 from "../../../images/african-woman-biochemist-researcher-checking-manifestations-vaccine-working-modern-equipped-laboratory-multiethnic-doctors-examining-virus-evolution-using-high-tech-researching-diagnosis.jpg";
import doctor2 from "../../../images/doctor-with-co-workers-analyzing-x-ray.jpg";
import doctor3 from "../../../images/francisco-venancio-M4Xloxsg0Gw-unsplash.jpg";

const Carouselscomponent = () => {
  return (
    <div>
      <Carousel className="carousle-parent">
        <Carousel.Item>
          <img className="d-block" src={doctor2} alt="First slide" />
          <Carousel.Caption>
            <h1>
              HIGHEST QUALITY <br /> MEDICAL TREATMENT
            </h1>
            <p>
              Enjoy the convenience of health screening at StarMed, with all
              screening and <br /> imaging tests done under one roof. We offer
              an extensive range of <br />
              health screening packages for every individual, taking into
              account factors such as <br /> health concerns, age, gender and
              risk factors.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block " src={doctor1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={doctor3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouselscomponent;
