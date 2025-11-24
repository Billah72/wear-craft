import React from "react";
import { FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

/**
 * Responsive ProductCard (Tailwind + React)
 * - Use inside a grid cell that's `h-full` / `auto-rows-fr` to get uniform rows
 * - Accepts product.image; falls back to the provided local file path
 */
const ProductCard = ({
  product,
  fallbackImage = "/mnt/data/830ca789-c1e1-4524-8f99-6bc077dd3f5c.png",
}) => {
  const imageUrl = product?.image || fallbackImage;

  return (
    <article className="flex flex-col h-full bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm">
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center bg-white">
        <img
          src={imageUrl}
          alt={product?.name || "product image"}
          loading="lazy"
          className="max-h-full w-full object-contain"
        />
      </div>

     
      <Link to={`/shopnow/${product.id}`}>
        <div className="p-4 flex-1 flex flex-col">
        <p className="text-sm text-gray-500 mb-1">{product?.categoryName}</p>
        <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2 line-clamp-2">
          {product?.name}
        </h3>

        <div className="flex items-center gap-2 text-orange-500 mb-3">
          
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-center gap-3">
            <p className="flex items-center text-lg md:text-xl font-bold text-green-600">
              {product?.price} <TbCurrencyTaka className="ml-1" />
            </p>
            {product?.mrp && (
              <p className="text-sm line-through text-gray-400">
                {product.mrp} <TbCurrencyTaka className="ml-1" />
              </p>
            )}
          </div>
        </div>
      </div>
      </Link>
    </article>
  );
};

export default ProductCard;
