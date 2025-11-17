export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="edu-grid">
        <div className="edu-card">
          <div className="spark" style={{ top: "18px", left: "20px" }}></div>
          <div
            className="spark"
            style={{ bottom: "20px", right: "20px" }}
          ></div>

          <h3>B.E — MVJ College of Engineering</h3>
          <p>2023 — 2027 • CGPA 8.82</p>
        </div>

        <div className="edu-card">
          <div className="spark" style={{ top: "15px", right: "25px" }}></div>
          <div className="spark" style={{ bottom: "15px", left: "25px" }}></div>

          <h3>PUC — Prerana PU College</h3>
          <p>2021 — 2023 • 92%</p>
        </div>
      </div>
    </section>
  );
}
