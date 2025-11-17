import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace('₹', '').replace(',', ''));
    return total + (price * (item.qty || 1));
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="container" style={{ marginTop: "2rem" }}>
        <h2>Your Cart is Empty</h2>
        <p>Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <h2>Your Cart ({cart.reduce((total, item) => total + (item.qty || 1), 0)} items)</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "1rem 0",
            padding: "1rem",
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #eee",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "100px", borderRadius: "8px", marginRight: "1rem" }}
          />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p style={{ color: "#4a6bfd", fontWeight: "bold" }}>{item.price}</p>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>
              Quantity: {item.qty || 1}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total and Checkout */}
      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          background: "#fff",
          borderRadius: "10px",
          border: "1px solid #eee",
          textAlign: "right"
        }}
      >
        <h3>Total: ₹{totalPrice.toLocaleString()}</h3>
        <button
          style={{
            padding: "12px 24px",
            background: "#4a6bfd",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            marginTop: "1rem"
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}