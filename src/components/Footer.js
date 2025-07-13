import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#111", color: "#ccc" }} className="py-4 mt-5">
      <Container className="text-center">
        <p style={{ margin: 0, fontSize: "0.9rem", letterSpacing: "0.5px" }}>
          Barış Petek • Portfolio
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
