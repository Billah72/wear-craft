import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import { FaStar } from "react-icons/fa";
import { div } from "framer-motion/client";
import ProductCard from "./SharedComponents/ProductCard";
import SectionHeading from "./SharedComponents/SectionHeading";

const SingleProduct = () => {
  const { id } = useParams();
  const { products = [] } = useData();

  const product = products.find((p) => String(p.id) === String(id));

  const [qty, setQty] = useState(1);

  const stock = Number(product?.stock ?? 0);
  const maxQty = stock > 0 ? stock : 99;
  const increase = () => {
    setQty((q) => (q < maxQty ? q + 1 : q));
  };
  const decrease = () => {
    setQty((q) => (q > 1 ? q - 1 : q));
  };

  const handleAddToCart = () => {
    if (stock === 0) return;
    // TODO: call your cart context / api to add product with `qty`
    console.log("Add to cart:", product?.id, "qty:", qty);
    // show toast / feedback as needed
  };

  // fallback local image (uploaded file)
  const fallbackImage = "/mnt/data/830ca789-c1e1-4524-8f99-6bc077dd3f5c.png";
  const imageUrl = product?.image || fallbackImage;

  return (
    <div>
      <div className="container mx-auto px-4 md:px-24 py-8">
        <div className="bg-white rounded-md shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image column */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-xl">
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] flex items-center justify-center bg-white rounded-md overflow-hidden border border-gray-100">
                  <img
                    src={imageUrl}
                    alt={product?.name || "product image"}
                    className="w-full h-full object-contain block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Details column */}
            <div className="w-full md:w-1/2 flex flex-col">
              <p className="text-sm text-gray-500 mb-1">
                {product?.categoryName}
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                {product?.name}
              </h1>

              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-1 text-orange-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Total Rating:{" "}
                    <span className="font-medium text-gray-700">
                      {product?.ratings ?? "N/A"}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-6 mb-4">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-green-600">
                    ${product?.price ?? "0"}
                  </p>
                  {product?.mrp && (
                    <p className="text-sm line-through text-gray-400">
                      ${product.mrp}
                    </p>
                  )}
                </div>

                <div className="ml-auto text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">SKU:</span>{" "}
                    <span className="text-gray-700 font-normal">
                      {product?.sku ?? "-"}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Stock:</span>{" "}
                    <span
                      className={`font-normal ${
                        stock > 0 ? "text-gray-700" : "text-red-500"
                      }`}
                    >
                      {stock > 0 ? stock : "Out of stock"}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                {product?.description}
              </p>

              {/* Counter + Add to Cart */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto">
                <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                  <button
                    onClick={decrease}
                    className="px-4 py-2 text-lg disabled:opacity-50"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <div className="px-6 py-2 border-l border-r border-gray-100 text-center min-w-[56px]">
                    {qty}
                  </div>
                  <button
                    onClick={increase}
                    className="px-4 py-2 text-lg disabled:opacity-50"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={stock === 0}
                  className={`btn px-5 py-2 rounded-md text-white ${
                    stock === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#5caf90] hover:bg-[#4da77a]"
                  }`}
                  aria-disabled={stock === 0}
                >
                  Add To Cart
                </button>

                <div className="text-sm text-gray-500 ml-0 sm:ml-4">
                  <p>Max: {maxQty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mx-24">
              <SectionHeading
        heading={"Top Rated"}
        colorHeading={"Selling Product"}
        discription={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nihil?"
        }
      />
      </div>

      <div className="container mx-auto px-4 md:px-24">
        {/* responsive grid: 1 / 2 / 3 / 4 / 5 cols at increasing breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-12 auto-rows-fr">
          {products?.slice(0, 5).map((p) => (
            <div key={p.id ?? p._id ?? p.name} className="w-full h-full">
              {/* ProductCard must be `flex flex-col h-full` internally for equal heights */}
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
