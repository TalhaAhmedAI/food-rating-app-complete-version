import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import { fetchRests } from "../actions";

const FoodForm = (props) => {
  const [formValue, setFormValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchRests();
    setFormValue("");
  };

  const handleChange = (formValue) => {
    setFormValue(formValue);
  };
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Food</Form.Label>
          <Form.Control
            value={formValue}
            onChange={(e) => handleChange(e.target.value)}
            autoFocus
            autoComplete="off"
            placeholder="Please enter your favourite food"
          />
          <Form.Text className="text-muted">
            Note: the system only shows available foods at your location
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default connect(null, { fetchRests })(FoodForm);
