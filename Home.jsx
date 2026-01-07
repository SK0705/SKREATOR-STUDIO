export default function Home() {
  return (
    <div style={homeStyles.heroWrapper}>
      {/* Decorative background glow */}
      <div style={homeStyles.blurGlow}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={homeStyles.contentCenter}>
          <span style={homeStyles.badge}>V1.0 Launching Now</span>
          
          <h1 style={homeStyles.mainTitle}>
            Where Ideas Evolve <br /> 
            <span style={homeStyles.gradientText}>Into Impact</span>
          </h1>
          
          <p style={homeStyles.subText}>
            SKREATOR STUDIO is a creator-first network empowering skilled 
            students and startups through AI, design, and strategic execution.
          </p>

          <div style={homeStyles.buttonGroup}>
            <a href="/join" className="btn btn-primary">
              Get Started
            </a>
            <a href="/about" className="btn btn-outline">
              Explore Our Work
            </a>
          </div>

          {/* Social Proof / Stats */}
          <div style={homeStyles.statsRow}>
            <div style={homeStyles.statItem}>
              <span style={homeStyles.statNumber}>10+</span>
              <span style={homeStyles.statLabel}>Startups Helped</span>
            </div>
            <div style={homeStyles.statItem}>
              <span style={homeStyles.statNumber}>50+</span>
              <span style={homeStyles.statLabel}>Creators Joined</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const homeStyles = {
  heroWrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  blurGlow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "rgba(34, 211, 238, 0.15)",
    filter: "blur(100px)",
    borderRadius: "50%",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0,
  },
  contentCenter: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  badge: {
    background: "rgba(34, 211, 238, 0.1)",
    color: "#22d3ee",
    padding: "6px 16px",
    borderRadius: "99px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    border: "1px solid rgba(34, 211, 238, 0.3)",
    marginBottom: "20px",
    display: "inline-block",
  },
  mainTitle: {
    fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
    lineHeight: "1.1",
    fontWeight: "800",
    marginBottom: "24px",
    color: "#fff",
  },
  gradientText: {
    background: "linear-gradient(to right, #22d3ee, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subText: {
    fontSize: "1.2rem",
    color: "#94a3b8",
    marginBottom: "40px",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto 40px",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  statsRow: {
    marginTop: "80px",
    display: "flex",
    gap: "60px",
    justifyContent: "center",
    opacity: "0.7",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  statNumber: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  }
};
