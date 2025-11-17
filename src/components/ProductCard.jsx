import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          width: "220px",
          padding: "1rem",
          border: "1px solid #eee",
          borderRadius: "10px",
          cursor: "pointer",
          background: "#fff",
          transition:
            "transform 0.25s ease, box-shadow 0.25s ease, border 0.25s ease",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
          e.currentTarget.style.border = "1px solid #4a6bfd";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
          e.currentTarget.style.border = "1px solid #eee";
        }}
      >
        {/* PRODUCT IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />

        {/* PRODUCT NAME */}
        <h3
          style={{
            fontSize: "1rem",
            marginTop: "10px",
            fontWeight: "600",
            minHeight: "40px",
          }}
        >
          {product.name}
        </h3>

        {/* PRODUCT PRICE */}
        <p
          style={{
            color: "#4a6bfd",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          {product.price}
        </p>
      </div>
    </Link>
  );
}