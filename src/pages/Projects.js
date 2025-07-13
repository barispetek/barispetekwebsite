import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Inventory Management API",
    description:
      ".NET Core ile geliştirilmiş, JWT doğrulamalı ve Swagger dokümantasyonuna sahip bir envanter yönetim RESTful API'si.",
    tech: ["C#", ".NET Core", "Entity Framework", "Swagger", "JWT"],
    github: "https://github.com/barispetek/InventoryManagementAPI",
  },
  {
    title: "Flask Blog App",
    description:
      "Kullanıcı kimlik doğrulama ve CRUD özelliklerine sahip Flask tabanlı blog platformu.",
    tech: ["Python", "Flask", "Markdown", "Jinja2", "Docker"],
    github: "https://github.com/barispetek/flask-blog-app",
  },
  {
    title: "Flask JWT API",
    description:
      "JWT tabanlı kullanıcı kimlik doğrulama ve korumalı route'lara sahip bir Flask RESTful API.",
    tech: ["Python", "Flask", "JWT", "PostgreSQL", "Docker"],
    github: "https://github.com/barispetek/flask-jwt-api",
  },
  {
    title: "Flask Data API",
    description:
      "Veri toplama ve REST endpoint işlemlerini yöneten veri odaklı bir Flask API.",
    tech: ["Python", "Flask", "REST API"],
    github: "https://github.com/barispetek/flask-data-api",
  },
  {
    title: "Flask To‑Do App",
    description:
      "Flask, SQLAlchemy ve SQLite kullanılarak geliştirilmiş, CRUD işlemleri ve semantic-ui arayüzüne sahip tam özellikli bir To‑Do uygulaması.",
    tech: ["Python", "Flask", "SQLAlchemy", "Semantic-UI", "SQLite"],
    github: "https://github.com/barispetek/flask-todo-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <Row className="justify-content-center">
          {projects.map((project, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
              <div className="project-card">
                <motion.div
                  className="p-4 h-100 shadow-sm rounded-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h5 className="fw-bold mb-2">{project.title}</h5>
                  <p className="text-muted small">{project.description}</p>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} bg="secondary" className="me-1 mb-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-dark"
                      size="sm"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </Button>
                  </div>
                </motion.div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
