import React from "react";
import { Helmet } from "react-helmet";
import Carouselscomponent from "../CarouselsComponent/Carouselscomponent";
import Ourdoctor from "../Ourdoctor/Ourdoctor";
import ServicesHome from "../ServicesHome/ServicesHome";
import Solutions from "../Solutions/Solutions";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>MedService | Home</title>
      </Helmet>
      <Carouselscomponent />
      <Solutions />
      <Ourdoctor />
      <ServicesHome />
    </div>
  );
};

export default Homepage;
