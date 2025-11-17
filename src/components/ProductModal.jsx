import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "420px",
          background: "#fff",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            float: "right",
            background: "transparent",
            border: "none",
            fontSize: "1.3rem",
            cursor: "pointer",
            color: "#444",
          }}
        >
          ✖
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "1rem",
          }}
        />

        {/* Product Name */}
        <h2 style={{ marginBottom: "10px" }}>{product.name}</h2>

        {/* Price */}
        <p
          style={{
            color: "#4a6bfd",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          {product.price}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => {
            addToCart(product);
            alert(`${product.name} added to cart!`);
            onClose();
          }}
          style={{
            padding: "0.8rem 1.4rem",
            background: "#4a6bfd",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            width: "100%",
            marginTop: "1rem",
            fontWeight: "bold",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}