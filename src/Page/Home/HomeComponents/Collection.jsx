import React from 'react'
import img1 from './../../../assets/image/12.jpg'
import img2 from './../../../assets/image/13.jpg'
import img3 from './../../../assets/image/14.jpg'

const Collection = () => {
  const items = [
    { img: img1, title: "Women's Collection" },
    { img: img2, title: "Women's Collection" },
    { img: img3, title: "Women's Collection" },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-end items-end p-8 h-72 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <h3 className="text-white text-3xl md:text-4xl font-semibold text-right mb-4">
              {item.title.split(' ')[0]} <br /> {item.title.split(' ')[1]}
            </h3>
            <button className="btn bg-[#5caf90] text-white border-none shadow-none hover:bg-[#4c9d7f]">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
