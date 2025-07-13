import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Home() {
  return (
    <Container className="text-center mt-5 pt-5" id="home">
      <motion.p
        className="text-secondary fs-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Merhaba, Ben
      </motion.p>

      <motion.h1
        className="fw-bold display-4"
        initial={{ opacity: 0, scale: 1.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Barış Petek
      </motion.h1>

      <motion.h4
        className="text-muted mb-4 fs-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Bilişim Sistemleri ve Teknolojileri
      </motion.h4>

      <motion.div
        className="d-flex justify-content-center gap-3 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="/BarisPetek_Resume.pdf"
          download
          className="btn btn-outline-dark"
        >
          CV indir
        </a>
        <a href="#contact" className="btn btn-dark text-white">
          İletişim
        </a>
      </motion.div>

      <motion.div
        className="d-flex justify-content-center gap-4 fs-3 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="https://www.linkedin.com/in/barış-petek-57a26b242"
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
      </motion.div>

      <motion.p
        className="lead mx-auto"
        style={{ maxWidth: "850px" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        Merhaba! Ben Barış Petek.
        Yazılım geliştirmeye ve teknoloji dünyasına ilgi duyan bir geliştirici adayıyım.
        Sistemleri anlamak, üretmek ve bir fikri gerçek bir ürüne dönüştürmek beni motive ediyor.
        Backend geliştirme, API mimarileri, veritabanı tasarımı ve bulut teknolojileri gibi alanlarda projeler geliştirerek kendimi sürekli geliştiriyorum.
        Amacım; yazılım alanındaki yetkinliğimi artırarak gerçek dünya projelerinde yer almak ve iş hayatına güçlü bir başlangıç yapabilmek.
      </motion.p>
    </Container>
  );
}

export default Home;
