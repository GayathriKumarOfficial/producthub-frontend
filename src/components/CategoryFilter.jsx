const categories = ["All", "Electronics", "Sports", "Clothing", "Beauty", "Home", "Accessories"];

export default function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="container" style={{ marginTop: "1.5rem", textAlign: "center" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          style={{
            padding: "10px 18px",
            borderRadius: "6px",
            background: selectedCategory === cat ? "#4a6bfd" : "#ffffff",
            color: selectedCategory === cat ? "#fff" : "#4a6bfd",
            border: "1px solid #4a6bfd",
            cursor: "pointer",
            marginRight: "12px",
            fontWeight: "500",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
