import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f5f7ff",
        padding: "2.5rem 2rem",
        borderTop: "1px solid #dfe3f7",
        marginTop: "3rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Brand Section */}
        <div style={{ flex: "1 1 250px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#4a6bfd",
              marginBottom: "0.5rem",
            }}
          >
            ProductHub
          </h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Your one-stop shop for electronics, fashion, beauty, home essentials
            and more. High-quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ color: "#333", marginBottom: "0.8rem" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "1.9" }}>
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#555" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#555" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#555" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={{ color: "#333", marginBottom: "0.8rem" }}>
            Contact Us
          </h3>
          <p style={{ color: "#555", marginBottom: "6px" }}>
            ✉ support@producthub.com
          </p>
          <p style={{ color: "#555", marginBottom: "6px" }}>
            📍 Chennai, India
          </p>
          <p style={{ color: "#555" }}>📞 +91 98765 43210</p>
        </div>

        {/* Social Media */}
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={{ color: "#333", marginBottom: "0.8rem" }}>
            Follow Us
          </h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <a
              href="#"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#4a6bfd",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#4a6bfd",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#4a6bfd",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          paddingTop: "1rem",
          borderTop: "1px solid #e2e5f3",
          color: "#666",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} ProductHub. All rights reserved.
      </div>
    </footer>
  );
}
