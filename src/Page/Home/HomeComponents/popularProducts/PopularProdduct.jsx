import React, { useState, useMemo } from "react";
import SectionHeading from "../../../../Components/SharedComponents/SectionHeading";
import useData from "../../../../hooks/useData";
import ProductCard from "../../../../Components/SharedComponents/ProductCard";

const PopularProducts = () => {
  const { categories = [], products = [] } = useData();

  const [categoryId, setCategoryId] = useState(null);

  // VIEW ALL STATE
  const [viewAll, setViewAll] = useState(false);

  const handleCategoryId = (id) => {
    setCategoryId(id);
    setViewAll(false); // category change করলে আবার 4 টি দেখাবে
  };

  const filteredProducts = useMemo(() => {
    const list =
      categoryId == null
        ? products
        : products.filter((p) => p.categoryId === categoryId);

    return (list || [])
      .slice()
      .sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }, [products, categoryId]);

  // viewAll true হলে সব দেখাবে, false হলে 4 টি দেখাবে
  const visibleProducts = viewAll
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <div className="container mx-auto px-6 md:px-24 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <SectionHeading
          heading={"Popular"}
          colorHeading={"Products"}
          discription={"Shop online for new arrivals and get free shipping"}
        />

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => handleCategoryId(null)}
            className={`px-3 py-1 rounded ${
              categoryId == null ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id ?? cat.name}
              onClick={() => handleCategoryId(cat.id)}
              className={`px-3 py-1 rounded ${
                categoryId === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-center gap-4 flex-wrap my-12">
          {visibleProducts.length === 0 ? (
            <p className="text-gray-500">No products found for this category.</p>
          ) : (
            visibleProducts.map((product) => (
              <ProductCard
                key={product.id ?? product._id ?? product.name}
                product={product}
              />
            ))
          )}
        </div>

        {/* VIEW ALL / SHOW LESS BUTTON */}
        {filteredProducts.length > 4 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setViewAll(!viewAll)}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {viewAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
