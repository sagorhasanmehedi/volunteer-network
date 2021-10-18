import React from "react";
import { useHistory } from "react-router";
import UseAuth from "../../../Hook/UseAuth";
import "./Services.css";

const ServicesHome = () => {
  const { Api } = UseAuth();
  const history = useHistory();
  const godetail = (id) => {
    history.push(`/servicesdetails/${id}`);
  };
  return (
    <div className="container">
      <div className="row g-3">
        {Api.map((services) => (
          <div key={services.id} className="card-parent col-lg-4 p-3">
            <img className="w-100" src={services.img} alt="" />
            <h4 className="card-heading">{services.services}</h4>
            <h6>{services.shortDES}</h6>
            <div className="services-button">
              <button onClick={() => godetail(services.id)}>Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;
