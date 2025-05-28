import React from "react";
import "../components/Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="my-navbar">
      <Navbar.Brand as={Link} to="/" style={{ color: "#8f6968" }}>
        Globetrakker
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/visitedcountries">
            Visited Countries 🌍
          </Nav.Link>
          <Nav.Link as={Link} to="/wishlist">
            Place to visit ✨
          </Nav.Link>
          <Nav.Link as={Link} to="">
            About 🙍🏽‍♀️
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <img
        src="/Logomvp.svg"
        alt="Logo"
        id="logo-nav"
        className="responsive-img"
      />
    </Navbar>
  );
}

export default MyNavbar;
