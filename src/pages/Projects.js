import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Inventory Management API",
    description: ".NET Core ile geliştirilmiş, JWT doğrulamalı ve Swagger dokümantasyonuna sahip bir envanter yönetim RESTful API'si.",
    tech: "C#, .NET Core, Entity Framework, Swagger, JWT",
    github: "https://github.com/barispetek/InventoryManagementAPI",
  },
  {
    title: "Flask Blog App",
    description: "Kullanıcı kimlik doğrulama ve CRUD özelliklerine sahip Flask tabanlı blog platformu.",
    tech: "Python, Flask, Markdown, Jinja2, Docker",
    github: "https://github.com/barispetek/flask-blog-app",
  },
  {
    title: "Flask JWT API",
    description: "JWT tabanlı kullanıcı kimlik doğrulama ve korumalı route'lara sahip bir Flask RESTful API.",
    tech: "Python, Flask, JWT, PostgreSQL, Docker",
    github: "https://github.com/barispetek/flask-jwt-api",
  },
  {
    title: "Flask Data API",
    description: "Veri toplama ve REST endpoint işlemlerini yöneten veri odaklı bir Flask API.",
    tech: "Python, Flask, REST API",
    github: "https://github.com/barispetek/flask-data-api",
  },
  {
    title: "Flask To‑Do App",
    description: "Flask, SQLAlchemy ve SQLite kullanılarak geliştirilmiş, CRUD işlemleri ve semantic-ui arayüzüne sahip tam özellikli bir To‑Do uygulaması.",
    tech: "Python, Flask, SQLAlchemy, Semantic‑UI, SQLite",
    github: "https://github.com/barispetek/flask-todo-app",
  },
];

function Projects() {
  return (
    <Container className="my-5" id="projects">
      <h2 className="text-center mb-4 fw-bold" style={{ fontSize: "2.4rem" }}>Projeler</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col md={6} lg={4} key={idx} className="mb-4">
            <Card className="h-100 shadow-sm project-card">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="mb-2">{project.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">{project.tech}</small>
                </Card.Text>
                <div className="mt-auto">
                  <Button
                    variant="dark"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
