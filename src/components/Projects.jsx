import React from "react";

const projects = [
  {
    title: "Cybersecurity Maritime Theft Detector",
    desc: "A Python-based system that detects theft activities occurring in the marine industry using pattern analysis and anomaly detection.",
  },
  {
    title: "To-Do List (React)",
    desc: "A clean and responsive React-based task manager with CRUD features and local storage support.",
  },
  {
    title: "Career Guidance Website",
    desc: "A career portal with an AI chatbot and a system to connect students with experienced professionals from various fields.",
  },
  {
    title: "Amazon UI Clone",
    desc: "A front-end clone of Amazon with responsive product grid, navbar, and shopping-style UI.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            {/* Floating spark effects */}
            <div className="spark" style={{ top: "16px", left: "22px" }}></div>
            <div
              className="spark"
              style={{ bottom: "18px", right: "25px" }}
            ></div>

            <h3>{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
