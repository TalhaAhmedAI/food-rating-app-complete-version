import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getUsers, deleteUser } from "../api/users";
import { getRestaurants, deleteRestaurant } from "../api/restaurants";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [restaurants, setRestaurants] = useState([])
  const getData = async () => {
    const result = await getUsers();
    setUsers(result.data);
    const response = await getRestaurants()
    setRestaurants(response.data)
  };
  useEffect(() => {
    getData();
  },[]);
  

  const userEdit = async (id) => {
    window.location = `/users/edit/${id}`
  }
  const userDelete = async (id) => {
    await deleteUser(id);
    window.location.reload()
  };

  const restaurantEdit = async (id) => {
    window.location = `/restaurants/edit/${id}`
  }
  const restaurantDelete = async (id) => {
    const response = await deleteRestaurant(id);
    console.log(response)
    
    // window.location.reload()
  };
  return (
    <Container className="pt-5">
      <Row className="d-flex" style={{ height: "70vh" }}>
        <Col className="shadow-lg bg-white rounded mx-5">
          {users.map((user, id) => (
            <Row
              className="shadow my-3 mx-2 py-2 px-2 rounded font-weight-bold"
              style={{ height: "7vh" }}
              key={id}
            >
              {user.name}
              <div className="btn-group ml-auto">
                  <button className="btn btn-primary btn-sm  mx-2" onClick={() => userEdit(user._id)}>Edit</button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => userDelete(user._id)}
                >
                  Delete
                </button>
              </div>
            </Row>
          ))}
        </Col>
        <Col className="shadow-lg bg-white rounded mx-5">
          {restaurants.map((restaurant, id) => (
            <Row
              className="shadow my-3 mx-2 py-2 px-2 rounded font-weight-bold"
              style={{ height: "7vh" }}
              key={id}
            >
              {restaurant.name}
              <div className="btn-group ml-auto">
                  <button className="btn btn-primary btn-sm  mx-2" onClick={() => restaurantEdit(restaurant._id)}>Edit</button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => restaurantDelete(restaurant._id)}
                >
                  Delete
                </button>
              </div>
            </Row>
            ))}
          </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
