export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skill-groups">
        {/* Programming Languages */}
        <div className="skill-box">
          <div className="spark" style={{ top: "20px", left: "30px" }}></div>
          <div
            className="spark"
            style={{ bottom: "20px", right: "20px" }}
          ></div>

          <h3>Programming Languages</h3>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="skill-box">
          <div className="spark" style={{ top: "15px", right: "25px" }}></div>
          <div className="spark" style={{ bottom: "10px", left: "15px" }}></div>

          <h3>Web Development</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Full Stack (Basics)</li>
          </ul>
        </div>

        {/* Tools & Databases */}
        <div className="skill-box">
          <div className="spark" style={{ top: "10px", left: "10px" }}></div>
          <div
            className="spark"
            style={{ bottom: "15px", right: "30px" }}
          ></div>

          <h3>Tools & Databases</h3>
          <ul>
            <li>DBMS</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
            <li>Figma (UI/UX)</li>
            <li>Cybersecurity Basics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
