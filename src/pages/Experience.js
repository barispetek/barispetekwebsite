import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const skills = [
  {
    category: "Yetenekler",
    items: [
      { title: "C#", level: "Intermediate" },
      { title: "Java", level: "Intermediate" },
      { title: ".NET", level: "Intermediate" },
      { title: "JavaScript", level: "Basic" },
      { title: "Python", level: "Intermediate" },
      { title: "OOP", level: "Intermediate" },
    ],
  },
  {
    category: "Backend Development Tech",
    items: [
      { title: "PostgreSQL, MSSQL", level: "Intermediate" },
      { title: "Node.js", level: "Basic" },
      { title: "ASP.NET Core API", level: "Intermediate" },
      { title: "Docker", level: "Intermediate" },
    ],
  },
  {
    category: "Diğer Yetenekler",
    items: [
      { title: "Version Control (Git, GitHub)", level: "" },
      {
        title: "Soft Skills",
        level: "Problem-solving, Teamwork, Adaptability",
      },
      { title: "Data Structures", level: "Intermediate" },
      { title: "Cloud Fundamentals (AWS)", level: "Certified" },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Deneyim</h2>
        {skills.map((section, idx) => (
          <div key={idx} className="mb-5">
            <h4 className="text-center mb-4">{section.category}</h4>
            <Row className="justify-content-center">
              {section.items.map((item, i) => (
                <Col key={i} xs={12} sm={6} md={4} lg={3} className="mb-3">
                  <Card className="h-100 shadow-sm text-center p-3">
                    <FaCheckCircle className="mb-2" size={22} />
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    {item.level && (
                      <Card.Text className="text-muted">{item.level}</Card.Text>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
