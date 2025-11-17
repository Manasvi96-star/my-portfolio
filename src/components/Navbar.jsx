import React from "react";

export default function Navbar({ theme, setTheme }) {
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-logo">
          <span style={{ fontWeight: 800 }}>Manasvi Vilas Sutar</span>
          <span
            className="logo-dot"
            style={{
              width: 10,
              height: 10,
              display: "inline-block",
              borderRadius: 8,
              marginLeft: 8,
              background:
                "linear-gradient(90deg,var(--accent1),var(--accent2))",
            }}
          />
        </div>

        <nav className="navmenu" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            onClick={toggle}
            style={{ marginLeft: 8 }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
