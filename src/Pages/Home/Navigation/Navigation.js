import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";


const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Navbar
        className="nav-bg"
        collapseOnSelect
        sticky="top"
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="nav-text-color me-5 fs-1" href="#home">
            Hungry
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/home"
                className="  text-decoration-none me-3 nav-text-color"
                href="#features"
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard"
                className="text-decoration-none me-3 nav-text-color"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/explore"
                className="nav-text-color text-decoration-none me-3"
              >
                Explore
              </NavLink>
              <NavLink
                to="/contact"
                className="text-decoration-none me-3 nav-text-color"
              >
                Contact
              </NavLink>
            </Nav>
            {user.email ? (
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-white text-decoration-none me-3 mb-lg-0">
                  {user.displayName}
                </p>
                <p
                  className="logout-button  text-decoration-none me-3 mb-lg-0 nav-text-color"
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="nav-text-color text-decoration-none me-3"
              >
                <p className="logout-button text-white text-decoration-none me-3 mb-lg-0">
                  Login
                </p>
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
