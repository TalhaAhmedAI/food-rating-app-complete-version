import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import Hotel from "./hotel";
import { selectRest } from "../actions/index";

const Cards = (props) => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    if (props.rests) {
      setHotels(props.rests.data);
    }
  }, [hotels, props.rests]);
  console.log(hotels);

  // const handleSelect = (hotel) => {
  //   props.selectRest(hotel);
  // };

  return (
    <Container>
      <Row>
        {hotels !== [] ? (
          hotels.map((hotel, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <Link
                onClick={() => props.selectRest(hotel)}
                to={`/overview/${index}`}
              >
                <Hotel hotel={hotel} />
              </Link>
            </Col>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { rests: state.rests };
};

export default connect(mapStateToProps, { selectRest })(Cards);
