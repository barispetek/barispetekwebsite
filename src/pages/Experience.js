import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";

const skills = [
  {
    category: "Programming Skills",
    icon: <FaCode size={20} className="me-2 text-primary" />,
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
    category: "Backend & DevOps",
    icon: <FaDatabase size={20} className="me-2 text-success" />,
    items: [
      { title: "PostgreSQL, MSSQL", level: "Intermediate" },
      { title: "Node.js", level: "Basic" },
      { title: "ASP.NET Core API", level: "Intermediate" },
      { title: "Docker", level: "Intermediate" },
    ],
  },
  {
    category: "Other Skills",
    icon: <FaTools size={20} className="me-2 text-warning" />,
    items: [
      { title: "Git & GitHub", level: "Version Control" },
      {
        title: "Soft Skills",
        level: "Problem-solving, Teamwork, Adaptability",
      },
      { title: "Data Structures", level: "Intermediate" },
      { title: "AWS Fundamentals", level: "Certified" },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="text-center fw-bold mb-5">Experience</h2>
        {skills.map((group, idx) => (
          <div key={idx} className="mb-5">
            <h4 className="text-center mb-4 d-flex justify-content-center align-items-center">
              {group.icon}
              {group.category}
            </h4>
            <Row className="justify-content-center">
              {group.items.map((item, i) => (
                <Col
                  key={i}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4 d-flex align-items-stretch"
                >
                  <div className="exp-card w-100 shadow-sm text-center p-4 rounded-4">
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p className="text-muted small">{item.level}</p>
                  </div>
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
