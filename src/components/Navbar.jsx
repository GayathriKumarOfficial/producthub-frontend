import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <nav
      style={{
        padding: "1rem",
        background: "#4a6bfd",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          fontSize: "1.4rem",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        ProductHub
      </Link>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>

        <Link to="/cart" style={{ color: "white", position: "relative" }}>
          <FaShoppingCart size={22} />

          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                minWidth: "18px",
                textAlign: "center",
              }}
            >
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}