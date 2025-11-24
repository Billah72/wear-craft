import React, { useState } from "react";
import useData from "../../hooks/useData";
import ProductCard from "../../Components/SharedComponents/ProductCard";

const ShopNow = () => {
  // defaults to empty arrays so code is safe if data is not yet loaded
  const { products = [], categories = [] } = useData();

  // allow multiple categories selected (checkboxes)
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleCategory = (catId) => {
    setSelectedIds((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  // Normalize product category id key (handle possible typo `categorieId`)
  const matchesCategory = (product) => {
    const prodCat = product?.categoryId ?? product?.categorieId ?? product?.category ?? null;
    // compare as string to avoid type mismatches
    return selectedIds.length === 0 || selectedIds.map(String).includes(String(prodCat));
  };

  const filteredData = products.filter((p) => matchesCategory(p));

  return (
    <div>
      <div className="container mx-auto px-4 md:px-24 mt-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3">
            <div className="border border-gray-200 p-3 rounded-md">
              <p className="border-b border-gray-200 pb-3 mb-4">Category</p>
              {categories?.map((cat) => (
                <label
                  key={cat.id ?? cat._id ?? cat.name}
                  className="flex items-center gap-2 mb-3 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                    className="w-4 h-4"
                  />
                  <span
                    onClick={() => toggleCategory(cat.id)}
                    className="text-sm text-gray-700"
                  >
                    {cat.name}
                  </span>
                </label>
              ))}
            </div>
          </aside>

          {/* Products */}
          <main className="col-span-12 md:col-span-9">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Shop Now</h2>
              <p className="text-sm text-gray-500">
                {filteredData.length} result{filteredData.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Responsive grid: 1 / 2 / 3 / 4 / 5 columns and equal row heights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr">
              {filteredData?.map((product) => (
                <div key={product.id ?? product._id ?? product.name} className="w-full h-full">
                  {/* ProductCard must be `flex flex-col h-full` internally for equal heights */}
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
