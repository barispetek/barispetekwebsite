import React, { useState } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: "" });

    try {
      const response = await fetch("https://baris-contact-api.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ success: true, message: "Mesaj başarıyla gönderildi!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ success: false, message: result.message || "Gönderim başarısız oldu." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Sunucu hatası. Lütfen daha sonra tekrar deneyin." });
    }
  };

  return (
    <section id="contact" className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
          İletişim
        </h2>

        <p className="text-center fs-5 mb-4">
          Benimle e-posta ya da sosyal medya üzerinden iletişime geçebilirsiniz:
        </p>

        {/* Butonlar */}
        <div className="d-flex justify-content-center gap-3 flex-wrap text-center mb-5">
          <Button variant="dark" href="mailto:barispetekk@gmail.com" className="px-4 py-2">
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
            href="#home"
            className="px-4 py-2"
          >
            <FaFileDownload className="me-2" />
            CV indir
          </Button>

        </div>

        {/* İletişim Formu */}
        <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Adınız</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adınız"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="mb-3">
            <Form.Label>E-posta</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-posta adresiniz"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="message" className="mb-3">
            <Form.Label>Mesajınız</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Mesajınızı yazın"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="success" type="submit">
              Mesajı Gönder
            </Button>
          </div>

          {status.message && (
            <Alert variant={status.success ? "success" : "danger"} className="mt-3 text-center">
              {status.message}
            </Alert>
          )}
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
