import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";
import ProductModal from "../components/ProductModal";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container">
      <HeroBanner />

      <SearchBar setSearchTerm={setSearchTerm} />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductGrid
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        setSelectedProduct={setSelectedProduct}   // ⭐ This opens modal
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}  // ⭐ This closes modal
        />
      )}
    </div>
  );
}
