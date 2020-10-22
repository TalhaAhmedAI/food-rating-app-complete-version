import React, { useState } from "react";
import Joi from "joi-browser";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login } from "../api/users";

const LoginForm = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [warnings, setWarnings] = useState({});

  const joiSchema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
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
    console.log(input);
    const jwt = await login(input);
    localStorage.setItem("token", jwt.data);
    window.location = "/";
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
      <Container style={{ marginTop: "10rem" }}>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              value={input.email}
              autoFocus
              placeholder="Enter your email"
            />
            {warnings.email && (
              <div className="alert alert-danger">{warnings.email}</div>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              type="password"
              value={input.password}
              placeholder="Enter your password"
            />
            {warnings.password && (
              <div className="alert alert-danger">{warnings.password}</div>
            )}
            <Form.Text className="text-muted">
              Note: We'll never share your details with anyone else.
            </Form.Text>
          </Form.Group>
          <Button disabled={validate()} variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
