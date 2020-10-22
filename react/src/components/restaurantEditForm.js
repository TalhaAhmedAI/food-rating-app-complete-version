import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import Joi from "joi-browser";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { getRestaurant, updateRestaurant } from '../api/restaurants';

const RestaurantEditForm = () => {

  const [input, setInput] = useState({ name: "", item_1: "", item_2: "", item_3: "", item_4: "" });
  const [warnings, setWarnings] = useState({});
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      const result = await getRestaurant(id);
      const {data} = result
      setInput({name: data.name, item_1: data.item_1.name, item_2: data.item_2.name, item_3: data.item_3.name, item_4: data.item_4.name})
    };
    getData()
  }, [id])

  const joiSchema = {
    name: Joi.string().required().label("Name"),
    item_1: Joi.string().required().label("item 1"),
    item_2: Joi.string().required().label("item 2"),
    item_3: Joi.string().required().label("item 3"),
    item_4: Joi.string().required().label("item 4"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(input, joiSchema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: joiSchema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setWarnings({ ...warnings, ...errors });
    if (errors) return;
    const response = await updateRestaurant(id, input)
    console.log(response)
    // alert(response.data)
    // window.location = "/admin"
  };

  const handleChange = ({ currentTarget: field }) => {
    const errors = {};
    const errorMessage = validateProperty(field);
    const { name, value } = field;
    if (errorMessage) {
      errors[name] = errorMessage;
    } else errors[name] = "";
    setInput({ ...input, [name]: value });
    setWarnings({ ...warnings, ...errors });
  };
  return (
    <div>
      <Container style={{ marginTop: "7rem" }}>
        <h1>Edit Restaurant</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              value={input.name}
              autoFocus
              placeholder="Enter restaurant's name..."
            />
            {warnings.name && (
              <div className="alert alert-danger">{warnings.name}</div>
            )}
          </Form.Group>
          <Row>
              <Col>
              <Form.Label>First item</Form.Label>
              <Form.Control onChange={handleChange} name="item_1" value={input.item_1} placeholder="First item"/>
              {warnings.item_1 && (
              <div className="alert alert-danger">{warnings.item_1}</div>
            )}
              </Col>
              <Col>
              <Form.Label>Second item</Form.Label>
              <Form.Control onChange={handleChange} name="item_2" value={input.item_2} placeholder="Second item"/>
              {warnings.item_2 && (
              <div className="alert alert-danger">{warnings.item_2}</div>
            )}
              </Col>
          </Row>
          <Row className="my-2">
              <Col>
              <Form.Label>Third item</Form.Label>
              <Form.Control onChange={handleChange} name="item_3" value={input.item_3} placeholder="Third item"/>
              {warnings.item_3 && (
              <div className="alert alert-danger">{warnings.item_3}</div>
            )}
              </Col>
              <Col>
              <Form.Label>Fourth item</Form.Label>
              <Form.Control onChange={handleChange} name="item_4" value={input.item_4} placeholder="Fourth item"/>
              {warnings.item_4 && (
              <div className="alert alert-danger">{warnings.item_4}</div>
            )}
              </Col>
          </Row>
          <Button className="my-2" disabled={validate()} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
 
export default RestaurantEditForm;