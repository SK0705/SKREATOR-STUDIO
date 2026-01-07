import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Join", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav style={navStyles.navContainer}>
      <div style={navStyles.navGlass}>
        {/* Logo Section */}
        <Link to="/" style={navStyles.logo}>
          SKREATOR<span style={{ color: "var(--cyan)" }}>STUDIO</span>
        </Link>

        {/* Links Section */}
        <ul style={navStyles.linksList}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} style={navStyles.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <Link to="/join" className="btn-primary" style={navStyles.navBtn}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}

// Inline styles to maintain your "flat" project structure
const navStyles = {
  navContainer: {
    position: "fixed",
    top: "20px",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    zIndex: 1000,
    padding: "0 20px",
  },
  navGlass: {
    background: "rgba(15, 23, 42, 0.7)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 30px",
    width: "100%",
    maxWidth: "1100px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  },
  logo: {
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "#fff",
    textDecoration: "none",
    letterSpacing: "1px",
  },
  linksList: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  navBtn: {
    padding: "8px 20px",
    fontSize: "0.85rem",
    borderRadius: "10px",
  },
};
