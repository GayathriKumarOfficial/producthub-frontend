export default function HeroBanner() {
  return (
    <div
      style={{
        width: "100%",
        height: "280px",
        background: "linear-gradient(135deg, #6a9dfd, #bcd3ff)",
        borderRadius: "10px",
        marginTop: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
        Discover the Best Products
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
        Shop smarter with ProductHub
      </p>

      <a
        href="#products-section"
        style={{
          padding: "10px 20px",
          backgroundColor: "#fff",
          borderRadius: "6px",
          color: "#4a6bfd",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Shop Now
      </a>
    </div>
  );
}
