import "./App.css";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app light"}>
      
      {/* PARTICLES BACKGROUND */}
      <Particles
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
          },
        }}
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="page-transition"
      />
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Osama</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="toggle" onClick={() => setDark(!dark)}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      <div className="container">
        {/* HERO */}
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Osama Siddiqui</h1>

          <TypeAnimation
            sequence={[
              "Frontend Engineer",
              1000,
              "React Developer",
              1000,
              "UI/UX Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing"
          />
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          className="glass section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I build immersive, high-performance web experiences using React,
            animations, and modern UI engineering principles.
          </p>
        </motion.section>
        {/* PROJECTS */}
        <motion.section
          id="about"
          className="glass section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>

          <div className="project-grid">
            <div className="card glass">
              <h3>Weather App</h3>
              <p>API-driven React app</p>
            </div>

            <div className="card glass">
              <h3>Dashboard UI</h3>
              <p>Analytics dashboard</p>
            </div>

            <div className="card glass">
              <h3>Full Stack CRUD</h3>
              <p>React + Node Integration</p>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="about"
          className="glass section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Contact Me</h2>
          <form
            action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}

export default App;