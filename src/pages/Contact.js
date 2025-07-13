import React from "react";
import { Container, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="text-center py-5 mt-5" id="contact">
      <h2 className="mb-4 fw-bold" style={{ fontSize: "2.5rem" }}>İletişim</h2>

      <p className="fs-5">Benimle e-posta yoluyla iletişime geçebilirsiniz:</p>

      <Button
        variant="dark"
        href="mailto:barispetekk@gmail.com"
        className="mb-4 px-4 py-2 fs-6"
      >
        barispetekk@gmail.com
      </Button>

      <div className="d-flex justify-content-center gap-4 fs-3 mt-4">
        <a
          href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-petek-57a26b242/"
          target="_blank"
          rel="noreferrer"
          className="text-dark"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/barispetek"
          target="_blank"
          rel="noreferrer"
          className="text-dark"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
    </Container>
  );
}

export default Contact;
