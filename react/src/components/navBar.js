import React from "react";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ location, user }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Foodie</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
        <Nav.Link href="/terms">Terms & Conditions</Nav.Link>
        {!user && (
          <React.Fragment>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/users/register">Register</Nav.Link>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <Nav.Link>{user.name}</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            <Nav.Link href="/restaurants/add">Add Restaurant</Nav.Link>
            {user.name === 'Admin' && (<React.Fragment>
            <Nav.Link href="/admin">Admin Page</Nav.Link>
            <Nav.Link href="/users/register">Register User</Nav.Link>
            </React.Fragment>)} 
          </React.Fragment>
        )}
      </Nav>
      <Nav className="navbar-right" style={{ color: "white" }}>
        {location}
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return { location: state.location };
};

export default connect(mapStateToProps)(NavBar);
