import React from "react";
import Card from "react-bootstrap/Card";

const Hotel = ({ hotel }) => {
  const { name } = hotel;
  return (
    <Card style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <Card.Body style={{ minHeight: 124 }}>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Hotel;
