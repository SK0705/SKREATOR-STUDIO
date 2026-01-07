export default function Contact() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-inner">
          <h2>Let's Collaborate</h2>
          <p style={{ marginBottom: '30px' }}>Have a vision? We have the execution. Send us a message.</p>
          
          <form style={{ textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input placeholder="Name" />
              <input placeholder="Email" />
            </div>
            <textarea placeholder="Tell us about your project..." rows="5"></textarea>
            <button className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>

          <div style={{ marginTop: '40px', color: '#64748b', fontSize: '0.9rem' }}>
            Follow us: <span style={{ color: '#22d3ee' }}>IG · TW · LI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
