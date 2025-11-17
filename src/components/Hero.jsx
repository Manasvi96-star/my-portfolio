import React, { useEffect, useState } from "react";

export default function Hero() {
  // profile image logic (optional)
  let profileExists = false;
  let profileSrc = "";
  try {
    // eslint-disable-next-line
    profileSrc = require("../assets/profile.jpg");
    profileExists = !!profileSrc;
  } catch (e) {
    profileExists = false;
  }

  // --- ROTATING SKILLS (JS-based, reliable) ---
  const skills = [
    "React Developer",
    "DBMS Learner",
    "JavaScript Enthusiast",
    "Frontend Developer",
    "UI Designer",
  ];

  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // cycle every 2s, with fade-out then change then fade-in
    const interval = setInterval(() => {
      // fade out
      setVisible(false);
      // after fade-out, advance index and fade in
      setTimeout(() => {
        setIdx((i) => (i + 1) % skills.length);
        setVisible(true);
      }, 300); // match CSS fade duration (300ms)
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // PARALLAX EFFECT (optional; keep if you want mouse tilt)
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      hero.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Aurora blobs (if you have them) */}
      <div className="aurora" aria-hidden>
        <div className="b1" />
        <div className="b2" />
        <div className="b3" />
      </div>

      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-title fade-up">
          Hello — I'm <span className="name">Manasvi</span>
        </div>

        {/* JS-DRIVEN ROTATING SKILL (single element, fades) */}
        <div className="rotate-skill-js" aria-live="polite">
          <span className={`skill-text ${visible ? "in" : "out"}`}>
            {skills[idx]}
          </span>
        </div>

        <div className="cta fade-up" style={{ marginTop: 18 }}>
          <a className="btn btn-primary" href="#projects">
            See my work
          </a>
          <a
            className="btn btn-ghost"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manasvisutar6@gmail.com&su=Hiring%20Inquiry&body=Hi%20Manasvi,%0A%0AI%20I%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>

          <a
            className="btn btn-ghost"
            href="/resume.pdf"
            download="Manasvi_Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right" style={{ zIndex: 2 }}>
        <div className="profile-card">
          <div className="avatar">
            {profileExists && <img src={profileSrc} alt="avatar" />}
          </div>
          <div className="profile-name">Manasvi Sutar</div>
          <div className="profile-role">Frontend Developer • MVJ College</div>
        </div>
      </div>

      {/* decorative elements if present */}
      <div className="hero-wave"></div>
      <div className="lens-flare"></div>
    </section>
  );
}
