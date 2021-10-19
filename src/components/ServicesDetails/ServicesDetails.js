import React from "react";
import { useParams } from "react-router";
import UseAuth from "../../Hook/UseAuth";
import "./ServicesDetails.css";

const ServicesDetails = () => {
  const { id } = useParams();
  const { Api } = UseAuth();
  const result = Api.filter((services) => services.id == id);

  return (
    <div className="servicesdetail-parent container">
      <div className="main-card">
        <div className="">
          <div className="servicesdetail-text">
            <h3>{result[0]?.services}</h3>
            <h4>{result[0]?.shortDES.slice(0, 50)}</h4>
            <div className="discription">
              <p>{result[0]?.des}</p>
            </div>
          </div>
          <div className="img-div">
            <img className="servicesdetail-img" src={result[0]?.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
