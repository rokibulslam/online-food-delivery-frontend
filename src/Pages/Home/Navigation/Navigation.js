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
        fixed="top"
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="nav-text-color" href="#home">
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
                to="/blog"
                className="text-decoration-none me-3 nav-text-color"
              >
                Blog
              </NavLink>
              <NavLink
                to="/aboutMe"
                className="nav-text-color text-decoration-none me-3"
              >
                About Me
              </NavLink>
            </Nav>
            <NavLink
              to="/login"
              className="nav-text-color text-decoration-none me-3"
            >
              Login
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
