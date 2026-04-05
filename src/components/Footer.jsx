export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--card)",
        padding: "1.5rem 1rem",
        marginTop: "3rem",
        textAlign: "center",
        borderTop: "1px solid #1f2937",
      }}
    >
      <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
        &copy; {new Date().getFullYear()} Md Imran Ahmad
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--accent)" }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--accent)" }}
        >
          LinkedIn
        </a>
        <a
          href="mailto:mdimranahmad928@gmail.com"
          style={{ color: "var(--accent)" }}
        >
          Email
        </a>
      </div>
    </footer>
  );
}
