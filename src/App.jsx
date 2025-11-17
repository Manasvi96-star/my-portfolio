import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  const [theme, setTheme] = useState("dark");

  // THEME EFFECT
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // REVEAL ANIMATION ON SCROLL
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 90) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="app-root">
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="app-container">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />

        <footer className="footer">
          © {new Date().getFullYear()} Manasvi Sutar — React Portfolio
        </footer>
      </main>
    </div>
  );
}
