import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={{ background: "#22d3ee", padding: "16px 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
        <strong style={{ color: "#020617", fontSize: "1.3rem" }}>
          SKREATOR STUDIO
        </strong>
        <nav style={{ background: "#020617", padding: "10px 22px", borderRadius: "999px" }}>
          {["/", "/about", "/services", "/join", "/contact"].map((path, i) => (
            <Link key={i} to={path} style={{ margin: "0 12px" }}>
              {["Home","About","Services","Join Us","Contact"][i]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
