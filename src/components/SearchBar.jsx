export default function SearchBar({ setSearchTerm }) {
  return (
    <div className="container" style={{ textAlign: "center", marginTop: "2rem" }}>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "60%",
          padding: "12px 16px",
          borderRadius: "8px",
          border: "1px solid #d3d9f5",
          fontSize: "1rem",
          outline: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      />
    </div>
  );
}
