import React from "react";
import { useParams } from "react-router";
import UseAuth from "../../Hook/UseAuth";
import "./ServicesDetails.css";

const ServicesDetails = () => {
  const { id } = useParams();
  const { Api } = UseAuth();
  const result = Api.filter((services) => services.id == id);

  return (
    <div className="servicesdetail-parent">
      <div className="container">
        <div className="row">
          <div className="servicesdetail-text col-lg-6">
            <h2>{result[0]?.services}</h2>
            <p>{result[0]?.des}</p>
          </div>
          <div className="col-lg-6">
            <img className="w-100" src={result[0]?.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
