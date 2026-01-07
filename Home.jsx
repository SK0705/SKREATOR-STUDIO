export default function Home() {
  return (
    <div style={homeStyles.heroWrapper}>
      {/* Decorative background glow */}
      <div style={homeStyles.blurGlow}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={homeStyles.contentCenter}>
          <span style={homeStyles.badge}>Built for Startups • V1.0 Live</span>
          
          <h1 style={homeStyles.mainTitle}>
            From Vision to <br /> 
            <span style={homeStyles.gradientText}>Market-Ready Products</span>
          </h1>
          
          <p style={homeStyles.subText}>
            SKREATOR STUDIO partners with early-stage startups to design, build, 
            and launch scalable products using AI, modern tech, and 
            execution-first strategy.
          </p>

          <div style={homeStyles.buttonGroup}>
            <a href="/join" className="btn btn-primary">
              Build With Us
            </a>
            <a href="/about" className="btn btn-outline">
              View Startup Solutions
            </a>
          </div>

          {/* Social Proof / Stats */}
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
