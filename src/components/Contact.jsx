export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <p style={{ color: "var(--muted)" }}>
        Email:{" "}
        <a
          href="mailto:manasvisutar6@gmail.com"
          style={{ color: "var(--accent1)", fontWeight: 700 }}
        >
          manasvisutar6@gmail.com
        </a>
        <br />
        <br />
        GitHub:{" "}
        <a
          href="https://github.com/Manasvi96-star"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent1)", fontWeight: 600 }}
        >
          github.com/Manasvi96-star
        </a>
        <br />
        <br />
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/manasvi-sutar-23519526b"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent1)", fontWeight: 600 }}
        >
          linkedin.com/in/manasvi-sutar-23519526b
        </a>
      </p>
    </section>
  );
}
