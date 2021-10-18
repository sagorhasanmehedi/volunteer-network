import React from "react";
import Carouselscomponent from "../CarouselsComponent/Carouselscomponent";
import Ourdoctor from "../Ourdoctor/Ourdoctor";
import ServicesHome from "../ServicesHome/ServicesHome";
import Solutions from "../Solutions/Solutions";

const Homepage = () => {
  return (
    <div>
      <Carouselscomponent />
      <Solutions />
      <Ourdoctor />
      <ServicesHome />
    </div>
  );
};

export default Homepage;
