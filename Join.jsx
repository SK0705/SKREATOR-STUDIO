export default function Join() {
  const skills = [
    "Frontend / React",
    "Backend / APIs",
    "Design & Branding",
    "AI & Automation",
    "Content & Marketing"
  ];

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: '900px' }}>
        <div className="card-inner" style={{ textAlign: 'left', padding: '60px' }}>
          <div style={joinStyles.flexLayout}>
            
            {/* Left Side: Content */}
            <div style={joinStyles.contentSide}>
              <span style={{ color: 'var(--cyan)', fontWeight: 'bold', fontSize: '0.9rem' }}>JOIN THE NETWORK</span>
              <h2 style={{ fontSize: '3rem', textAlign: 'left' }}>Become a <br/><span style={{ color: 'var(--cyan)' }}>SKREATOR</span></h2>
              <p style={{ margin: '20px 0', fontSize: '1.1rem' }}>
                We don't care about your degree. We care about your **proof of work**. Join our network of elite students and creators.
              </p>
              
              <div style={{ marginTop: '30px' }}>
                <a href="https://your-google-form-link.com" className="btn btn-primary" style={{ padding: '16px 40px' }}>
                  Open Application
                </a>
              </div>
            </div>

            {/* Right Side: Skill Tags */}
            <div style={joinStyles.skillsSide}>
              <h4 style={{ marginBottom: '20px', opacity: 0.6 }}>WE ARE LOOKING FOR:</h4>
              <div style={joinStyles.tagCloud}>
                {skills.map(skill => (
                  <div key={skill} style={joinStyles.tag}>
                    {skill}
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                "Talent is the only currency we trade in."
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

const joinStyles = {
  flexLayout: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  contentSide: {
    flex: '1.2',
    minWidth: '300px'
  },
  skillsSide: {
    flex: '1',
    minWidth: '300px',
    background: 'rgba(255,255,255,0.03)',
    padding: '30px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.05)'
  },
  tagCloud: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  tag: {
    background: 'rgba(34, 211, 238, 0.1)',
    color: '#22d3ee',
    padding: '10px 15px',
    borderRadius: '10px',
    fontSize: '0.9rem',
    fontWeight: '600',
    border: '1px solid rgba(34, 211, 238, 0.2)',
    textAlign: 'center'
  }
};
