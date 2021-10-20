import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import UseAuth from "../../../Hook/UseAuth";
import "./Services.css";

const ServicesHome = () => {
  const [services, setservices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("Servicesdata.json")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);

  const { Api } = UseAuth();
  const history = useHistory();
  const godetail = (id) => {
    history.push(`/servicesdetails/${id}`);
  };
  return (
    <div className="services-home">
      <div className="container">
        <h3 className="services-heading">Our Departments</h3>
        <div className="card-parent-grid ">
          {Api.map((services) => (
            <div key={services.id} className="card-parent ">
              <img className="w-100 card-img" src={services.img} alt="" />
              <h4 className="card-heading">{services.services}</h4>
              <p>{services.shortDES}</p>
              <div className="services-button">
                <button onClick={() => godetail(services.id)}>Detail</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
