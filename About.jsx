export default function About() {
  const points = [
    { title: "Talent", icon: "💎" },
    { title: "Execution", icon: "🚀" },
    { title: "Real-world", icon: "🌍" }
  ];

  return (
    <div className="container">
      <div className="card">
        <div className="card-inner">
          <span style={{ color: '#22d3ee', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Our Mission</span>
          <h2>SKREATOR STUDIO</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
            We are a creator-first network empowering skilled students and startups through mentorship and execution.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
            {points.map((p) => (
              <div key={p.title} style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1rem' }}>{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
