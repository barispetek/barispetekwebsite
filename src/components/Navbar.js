import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3 fixed-top">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold fs-3"
          style={{ letterSpacing: "1px" }}
        >
          Barış Petek
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="gap-3 fs-5">
            <Nav.Link href="#home">Anasayfa</Nav.Link>
            <Nav.Link href="#about">Hakkımda</Nav.Link>
            <Nav.Link href="#projects">Projeler</Nav.Link>
            <Nav.Link href="#experience">Deneyim</Nav.Link>
            <Nav.Link href="#contact">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
