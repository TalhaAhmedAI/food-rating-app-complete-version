import React, { useState } from "react";
import { connect } from "react-redux";
import { submitLocation } from "../actions/index";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const LocationForm = (props) => {
  const [formValue, setFormValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitLocation(formValue);
  };

  const handleChange = (formValue) => {
    setFormValue(formValue);
  };

  return (
    <Container style={{ marginTop: "15rem" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e.target.value)}
            value={formValue}
            autoFocus
            placeholder="Please enter your location"
          />
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default connect(null, { submitLocation })(LocationForm);
