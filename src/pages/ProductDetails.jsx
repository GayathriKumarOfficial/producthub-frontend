import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container" style={{ padding: "2rem 0" }}>
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    alert(`${product.name} (x${qty}) added to cart`);
  };

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "1rem",
          background: "transparent",
          border: "none",
          color: "#4a6bfd",
          cursor: "pointer",
          fontSize: "0.95rem"
        }}
      >
        ← Back
      </button>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          flexWrap: "wrap"
        }}
      >
        {/* LEFT: Image */}
        <div
          style={{
            flex: "0 1 420px",
            minWidth: "260px",
            maxWidth: "520px",
            background: "#fff",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "420px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        </div>

        {/* RIGHT: Details */}
        <div style={{ flex: "1 1 360px", minWidth: "280px" }}>
          <h1 style={{ marginTop: 0, marginBottom: "0.5rem" }}>{product.name}</h1>

          <p style={{ color: "#666", marginTop: 0, marginBottom: "1rem" }}>
            Category: <strong>{product.category}</strong>
          </p>

          <p style={{ color: "#4a6bfd", fontSize: "1.4rem", fontWeight: 700, margin: "0.5rem 0 1rem" }}>
            {product.price}
          </p>

          <div style={{ marginBottom: "1rem", color: "#444" }}>
            <p style={{ marginTop: 0 }}>
              <strong>Product details</strong>
            </p>
            <p style={{ marginTop: 6, lineHeight: 1.5 }}>
              {product.description ||
                "This is a high-quality product. You can use this demo field to describe the product features, specifications and benefits. Replace this text with your own description if you want."}
            </p>
          </div>

          {/* Quantity + Add to Cart */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "1.2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <label style={{ fontSize: "0.9rem", color: "#333" }}>Quantity</label>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))}
                style={{
                  width: "72px",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #e6e9fb",
                  textAlign: "center",
                  outline: "none"
                }}
              />
            </div>

            <button
              onClick={handleAddToCart}
              style={{
                padding: "10px 18px",
                background: "#4a6bfd",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
                boxShadow: "0 6px 18px rgba(74,107,253,0.18)"
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={() => { navigator.clipboard?.writeText(window.location.href); alert("Product link copied"); }}
              style={{
                padding: "10px 12px",
                background: "#fff",
                color: "#4a6bfd",
                border: "1px solid #e6e9fb",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600
              }}
            >
              Share
            </button>
          </div>

          {/* Extra info / returns */}
          <div style={{ fontSize: "0.9rem", color: "#666" }}>
            <p style={{ margin: 0 }}>✅ 7 day returns</p>
            <p style={{ margin: 0 }}>🚚 Fast shipping available</p>
          </div>
        </div>
      </div>
    </div>
  );
}