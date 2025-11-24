import React from "react";
import SectionHeading from "./../../../Components/SharedComponents/SectionHeading";
import useData from "../../../hooks/useData";
import ProductCard from "../../../Components/SharedComponents/ProductCard";

const NewProduct = () => {
  const { products } = useData();

  // local uploaded image path (you provided this earlier)
  const fallbackImage = "/mnt/data/648782a3-bd33-488d-a899-d0521962c75b.png";

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          discription={"Don't wait. The time will never be just Right"}
          heading={"Day of the"}
          colorHeading={"Deal"}
        />

        <div className="mt-6">
          {Array.isArray(products) && products.length > 0 ? (
            // grid: 1 / 2 / 3 / 4 columns as screen grows
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {products.slice(-4).map((p) => (
                <div
                  key={p.id ?? p._id ?? p.sku ?? Math.random()}
                  className="relative w-full max-w-[280px] flex flex-col"
                >
                  {/* NEW badge */}
                  <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    NEW
                  </span>

                  {/* Ensure ProductCard takes full available height so cards align */}
                  <div className="w-full h-full">
                    <ProductCard product={p} fallbackImage={fallbackImage} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
