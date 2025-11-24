import React from "react";
import cover from "../../../assets/image/execulisive colloction.jpg";

const LatestPart = () => {
  return (
    <div className="pt-10">
      <div
        className="h-[80vh] bg-cover "
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="text-white flex flex-col h-full items-end text-end container mx-auto px-24 justify-center gap-4">
          <p className="text-3xl font-semibold ">30%off sale</p>
          <h3 className="text-5xl font-semibold text-gray-700">
            Latest Exclusive <br />
            Summer Collection
          </h3>
          <button className="bg-[#5caf90] px-5 py-2 rounded-md text-white">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default LatestPart;
