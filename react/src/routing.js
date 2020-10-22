import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Terms from "./pages/terms";
import Home from "./pages/home";
import OverView from "./pages/overView";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import UserEditForm from './components/userEditForm';
import RestaurantEditForm from './components/restaurantEditForm'
import AdminPanel from "./pages/admin";
import RestaurantForm from "./pages/restaurantForm";

const Routing = ({user}) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/overview/:id" element={<OverView />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users/register" element={<RegisterForm />} />
        <Route path="/users/edit/:id" element={<UserEditForm />} />
        <Route path="/restaurants/edit/:id" element={<RestaurantEditForm />} />
        <Route path="/restaurants/add" element={<RestaurantForm />} />
        <Route path="/admin" element={ user && user.name === "Admin" ? <AdminPanel /> : <LoginForm />} />
      </Routes>
    </Router>
  );
};

export default Routing;
