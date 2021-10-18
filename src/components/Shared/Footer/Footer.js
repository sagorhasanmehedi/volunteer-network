import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent ">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 each-col">
            <h3>About Hospitals</h3>
            <p>
              The relentless service of Hospitals in the <br /> past 25 years
              taken health care to the <br /> most modern levels in the region{" "}
              <br /> catering to urban & rural.
            </p>
            <p>
              A Health Care Provider of Western <br /> Approach, Hospitals is
              the most trusted <br /> multispecialty hospital.
            </p>
            <div className="know-mor">
              <a href="u">KNOW MORE</a>
            </div>
          </div>
          <div className="col-lg-3 each-col">
            <h3>Usefull Links</h3>
            <p>About Us</p>
            <p>Awards</p>
            <p>Consultants</p>
            <p>Working Hours</p>
            <p>Procedures</p>
            <p>Special Offers</p>
            <p>FAQ’s</p>
          </div>
          <div className="col-lg-3 each-col">
            <h3>Services</h3>
            <p> Services</p>
            <p>Healthy Foods</p>
            <p>Appointments</p>
            <p>Latest News</p>
            <p>Certificates</p>
            <p>Qualifications</p>
          </div>
          <div className="col-lg-3 each-col">
            <h3>Contact Details</h3>
            <div className="footericon-addres">
              <i class="fas fa-map-marker-alt"></i>
              <p>
                Park Drive, Varick Str New York,
                <br />
                NY 10012, USA
              </p>
            </div>
            <div className="footericon-addres">
              <i class="far fa-envelope"></i>
              <p>Getwell@Hospitals.com</p>
            </div>
            <div className="footericon-addres">
              <i class="fas fa-phone-volume"></i>
              <p>(123) 0200 12345 & 7890</p>
            </div>
            <div className="footericon-addres">
              <i class="far fa-clock"></i>
              <p>Mon-Satday: 9am to 18pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
