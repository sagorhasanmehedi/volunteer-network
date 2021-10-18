import React from "react";
import "./Ourdoctor.css";

const Ourdoctor = () => {
  return (
    <div className="our-doctor">
      <div className="container">
        <div className="titel-section">
          <h3>Our Medical Specialists</h3>
          <p>
            With a multidisciplinary team of specialists, Dr Hoo and his
            management team <br /> are focused on delivering the latest
            evidence-based medicine, supported
          </p>
        </div>
        <div className="row">
          <div className="doctor-card col-lg-3">
            <div className="for-img-hover">
              <img
                className="w-100 doctor-img"
                src={
                  "https://www.gph.ae/cdn/images/500/dr-ismail-hassan.jpg.webp"
                }
                alt=""
              />
            </div>
            <div className="doctor-dec">
              <h5>Jonathan Barnes D.M.</h5>
              <span>Chief Medical Officer</span>
              <p>
                Dr Hasnul graduated from University <br /> of Leeds, United
                Kingdom in 1998. <br /> In 2008, he completed his Masters
              </p>
            </div>
          </div>
          <div className="doctor-card col-lg-3">
            <div className="for-img-hover">
              <img
                className="w-100 doctor-img"
                src={
                  "https://www.gph.ae/cdn/images/500/dr-noor-buchholz.jpg.webp"
                }
                alt=""
              />
            </div>
            <div className="doctor-dec">
              <h5>Dr. Gary Cheng Yen Ching</h5>
              <span>Anesthesiologist</span>
              <p>
                Dr. Hoo graduated from King’s <br /> College London, United
                Kingdom (UK) <br /> in 2002 with preclinical Merits.
              </p>
            </div>
          </div>
          <div className="doctor-card col-lg-3">
            <div className="for-img-hover">
              <img
                className="w-100 doctor-img"
                src={
                  "https://www.gph.ae/cdn/images/500/dr-ismail-al-khalidi.jpg.webp"
                }
                alt=""
              />
            </div>
            <div className="doctor-dec">
              <h5>DR. ISMAIL HASSAN</h5>
              <span>Head of Urology</span>
              <p>
                European Urological Association (EUA), <br /> Society for Sexual
                Medicine (ESSM),
                <br /> European School Of Oncology, (ESO),
              </p>
            </div>
          </div>
          <div className="doctor-card col-lg-3">
            <div className="for-img-hover ">
              <img
                className="w-100 doctor-img"
                src={
                  "https://www.gph.ae/cdn/images/500/doc_1630841291.jpg.jpg.webp"
                }
                alt=""
              />
            </div>
            <div className="doctor-dec">
              <h5>DR. NOOR BUCHHOLZ</h5>
              <span>Consultant Urologist</span>
              <p>
                Dr.Noor Buchholz is one among the best <br /> urologist in
                Dubai. Dr.Noor was trained <br /> in Germany, Switzerland and
                Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourdoctor;
