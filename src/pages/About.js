import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { FaLaptopCode, FaUniversity } from "react-icons/fa";

function About() {
  return (
    <Container className="my-5 py-5" id="about">
      <h2 className="text-center fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
        Hakkımda
      </h2>

      <Row className="align-items-center mt-5">
        <Col md={4} className="text-center mb-4">
          <Image
            src="/profile.jpg"
            roundedCircle
            width="220"
            height="220"
            alt="Barış Petek"
            className="shadow-sm"
          />
        </Col>

        <Col md={8}>
          <Row className="mb-4 g-4">
            <Col md={6}>
              <Card className="h-100 text-center border-1 shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-2 fs-5">
                    <FaLaptopCode className="me-2" /> Deneyim
                  </Card.Title>
                  <Card.Text>Backend Development</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 text-center border-1 shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-2 fs-5">
                    <FaUniversity className="me-2" /> Eğitim
                  </Card.Title>
                  <Card.Text>
                    Bilgi Sistemleri ve Teknolojileri <br />
                    Okan Üniversitesi
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        <p
            className="mt-3"
            style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            fontWeight: 400,
            letterSpacing: "0.3px",
            color: "#333", 
            fontFamily: "'Segoe UI', 'Roboto', sans-serif",
        }}
>
  Ben Barış Petek. Yazılım geliştirme ve sistem altyapılarına ilgi duyan, öğrenmeye açık bir geliştiriciyim.
  Python, Flask, C#, .NET Core ve Java gibi teknolojilerle kendimi geliştiriyor; backend alanında pratik bilgilerimi her geçen gün artırıyorum.
  RESTful API geliştirme, JWT ile kimlik doğrulama, veritabanı yönetimi, Docker ile uygulama konteynerleştirme, Cloud yapılar ve temel network bileşenleri gibi konulara odaklanıyorum.
  Amacım; teknik bilgimi gerçek projelerde kullanarak yazılım dünyasında güçlü bir kariyer inşa etmek ve bulut sistemleriyle birlikte altyapı alanında da yetkinlik kazanmak.
        </p>

        </Col>
      </Row>
    </Container>
  );
}

export default About;
