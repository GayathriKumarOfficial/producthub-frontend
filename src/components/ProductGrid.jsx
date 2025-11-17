import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ searchTerm, selectedCategory, setSelectedProduct }) {
  let filtered = products;

  if (selectedCategory !== "All") {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  filtered = filtered.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Products</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {filtered.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => setSelectedProduct(p)}
            />
          ))
        )}
      </div>
    </div>
  );
}