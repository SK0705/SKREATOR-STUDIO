export default function Contact() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-inner">
          <h2>Get in Touch</h2>

          <input placeholder="Your Name" />
          <input placeholder="Email Address" />
          <textarea placeholder="Message"></textarea>

          <a className="btn btn-primary">Send Message</a>

          <p style={{ marginTop: "20px" }}>
            WhatsApp · Instagram · Email
          </p>
        </div>
      </div>
    </div>
  );
}
