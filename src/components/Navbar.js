import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm py-3 bg-white">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold fs-4 text-primary"
          style={{ letterSpacing: "0.5px" }}
        >
          Barış Petek
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="gap-3 fs-5">
            <Nav.Link href="#home" className="nav-item-custom">
              Anasayfa
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item-custom">
              Hakkımda
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-item-custom">
              Projeler
            </Nav.Link>
            <Nav.Link href="#experience" className="nav-item-custom">
              Deneyim
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-item-custom">
              İletişim
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
