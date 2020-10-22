import React from "react";
import { connect } from "react-redux";
import LocationForm from "../components/locationForm";
import FoodForm from "../components/foodForm";
import Cards from "../components/cards";

const Home = ({ location }) => {
  return (
    <div>
      {location ? <FoodForm /> : <LocationForm />}
      <Cards />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { location: state.location };
};

export default connect(mapStateToProps)(Home);
