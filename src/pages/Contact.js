import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
          İletişim
        </h2>

        <p className="text-center fs-5 mb-4">
          Benimle e-posta ya da sosyal medya üzerinden iletişime geçebilirsiniz:
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap text-center">
          <Button
            variant="dark"
            href="mailto:barispetekk@gmail.com"
            className="px-4 py-2"
          >
            <FaEnvelope className="me-2" />
            Mail Gönder
          </Button>

          <Button
            variant="outline-dark"
            href="https://github.com/barispetek"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2"
          >
            <FaGithub className="me-2" />
            GitHub
          </Button>

          <Button
            variant="outline-primary"
            href="https://www.linkedin.com/in/barış-petek-57a26b242/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2"
          >
            <FaLinkedin className="me-2" />
            LinkedIn
          </Button>

          <Button
            variant="primary"
            href="/BarisPetek-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2"
          >
            <FaFileDownload className="me-2" />
            CV indir
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
