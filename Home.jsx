import { Link } from "react-router-dom";

const homeStyles = {
  heroWrapper: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #020617, #000)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "80px 20px", // Added padding for mobile safety
    overflow: "hidden",
  },

  blurGlow: {
    position: "absolute",
    top: "-150px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "500px",
    height: "500px",
    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
    filter: "blur(160px)",
    opacity: 0.6,
    pointerEvents: "none", // Ensures it doesn't block clicks
  },

  contentCenter: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "auto",
  },

  badge: {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "999px",
    background: "rgba(34,211,238,0.1)",
    color: "#22d3ee",
    fontWeight: 600,
    fontSize: "0.85rem",
    marginBottom: "20px",
    border: "1px solid rgba(34,211,238,0.2)",
  },

  mainTitle: {
    fontSize: "clamp(2.2rem, 8vw, 3.8rem)", // Responsive font sizing
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: "20px",
    color: "#fff",
  },

  gradientText: {
    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  },

  subText: {
    opacity: 0.85,
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: 1.6,
    marginBottom: "36px",
    color: "#94a3b8",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "48px",
  },

  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "20px",
    opacity: 0.85,
  },

  statItem: {
    textAlign: "center",
  },

  statNumber: {
    display: "block",
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "#22d3ee",
  },

  statLabel: {
    fontSize: "0.9rem",
    opacity: 0.7,
    color: "#fff",
  },
};

export default function Home() {
  return (
    <div style={homeStyles.heroWrapper}>
      {/* Background Glow */}
      <div style={homeStyles.blurGlow}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={homeStyles.contentCenter}>
          <span style={homeStyles.badge}>Built for Startups • V1.0 Live</span>

          <h1 style={homeStyles.mainTitle}>
            From Vision to <br />
            <span style={homeStyles.gradientText}>
              Market-Ready Products
            </span>
          </h1>

          <p style={homeStyles.subText}>
            SKREATOR STUDIO partners with early-stage startups to design,
            build, and launch scalable products using AI, modern tech,
            and execution-first strategy.
          </p>

          <div style={homeStyles.buttonGroup}>
            <Link to="/join" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              Build With Us
            </Link>
            <Link to="/about" className="btn btn-outline" style={{ textDecoration: 'none' }}>
              View Startup Solutions
            </Link>
          </div>

          <div style={homeStyles.statsRow}>
            <div style={homeStyles.statItem}>
              <span style={homeStyles.statNumber}>10+</span>
              <span style={homeStyles.statLabel}>Startup Builds</span>
            </div>
            <div style={homeStyles.statItem}>
              <span style={homeStyles.statNumber}>0 → 1</span>
              <span style={homeStyles.statLabel}>Products Launched</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
