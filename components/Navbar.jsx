import React from "react";
import "../components/Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="my-navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-title">
        <img
          src="/Logo.svg"
          alt="Logo"
          id="logo-desktop"
          className="responsive-img"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/visitedcountries">
            Visited Countries 🌍
          </Nav.Link>
          <Nav.Link as={Link} to="/wishlist">
            Places to visit ✨
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutMe">
            About me 🙍🏽‍♀️
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
