import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="pt-5 mt-5">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
