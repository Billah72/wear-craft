import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../../../../Components/SharedComponents/SectionHeading";
import useData from "../../../../hooks/useData";
import ProductCard from "../../../../Components/SharedComponents/ProductCard";

const PopularProducts = () => {
  const { categories = [], products = [] } = useData();

  const [categoryId, setCategoryId] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const handleCategoryId = (id) => {
    setCategoryId(id);
    setViewAll(false); 
  };

  const filteredProducts = useMemo(() => {
   
    const list =
      categoryId == null ? products : products.filter((p) => p.categoryId == categoryId);

    return (list || []).slice().sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }, [products, categoryId]);


  const defaultLimit = categoryId == null ? 4 : 2;
  const visibleProducts = viewAll ? filteredProducts : filteredProducts.slice(0, defaultLimit);

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
            className={`px-3 py-1 rounded ${categoryId == null ? "bg-blue-600 text-white" : "bg-gray-100"}`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id ?? cat.name}
              onClick={() => handleCategoryId(cat.id)}
              className={`px-3 py-1 rounded ${categoryId === cat.id ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

     <div className="mt-8">
  {/* Products grid: responsive, centered, consistent heights */}
  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 my-12 justify-items-center items-start">
    {visibleProducts.length === 0 ? (
      <p className="text-gray-500 col-span-full text-center">No products found for this category.</p>
    ) : (
      visibleProducts.map((product) => (
        /* wrapper fills the grid cell; ProductCard should use `flex flex-col h-full` */
        <div
          key={product.id ?? product._id ?? product.name}
          className="w-full max-w-xs h-full"
          aria-label={product?.name || "product"}
        >
          {/* pass fallbackImage prop if your ProductCard supports it */}
          <ProductCard
            product={product}
            fallbackImage={"/mnt/data/20c0bd03-0859-40df-8e40-b13463255206.png"}
          />
        </div>
      ))
    )}
  </div>

  {/* Controls: responsive layout (stack on small screens, inline on md+) */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-4">
    {filteredProducts.length > defaultLimit && (
      <button
        onClick={() => setViewAll((s) => !s)}
        className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        aria-pressed={viewAll}
      >
        {viewAll ? "Show Less" : "View All"}
      </button>
    )}

    <Link to="/shopnow" className="w-full md:w-auto">
      <button
        className="w-full md:w-auto px-6 py-2 border rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
        aria-label="Go to Shop Now"
      >
        Shop Now
      </button>
    </Link>
  </div>
</div>

    </div>
  );
};

export default PopularProducts;
