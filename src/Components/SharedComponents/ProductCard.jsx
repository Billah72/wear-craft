import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="w-72 flex flex-col justify-center items-center border  border-gray-200 rounded-md">
        <img className="w-72" src={product.image} alt="" />
        <div className="p-3 pl-5">
          <p className="text-gray-500 ">{product.categoryName}</p>
          <h3 className="font-semibold text-gray-700">{product.name}</h3>
          <div className="flex gap-1 py-2  text-orange-500">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
           
          </div>
          <div className="flex  gap-3">
            <p className="flex  color-prymary">{product.price} <TbCurrencyTaka/> </p>
            <p className="flex  line-through text-gray-400">{product.mrp} <TbCurrencyTaka/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
