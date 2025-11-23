import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../../assets/image/BG-IMG.png";
import img2 from "../../../assets/image/LAPTOP-BG.PNG";
import img3 from "../../../assets/image/LAPTOP-HERO-BG.png";
import img4 from "../../../assets/image/LAPTOP-BG1.png";

const images = [img1, img2, img3, img4];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // AutoPlay every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full my-10">
      <div className="relative w-full h-[70vh] overflow-hidden rounded-xl">
        {/* SLIDE IMAGE */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        >
          <div className="h-full flex flex-col justify-center pl-6 md:pl-24 text-white bg-black/20">
            <h3 className="font-semibold text-2xl md:text-3xl drop-shadow">
              Biggest Sale for Winter 70% Off
            </h3>

            <h1 className="font-bold text-4xl md:text-5xl drop-shadow">
              Biggest Sale for Winter <br /> Men & Women
            </h1>

            {/* FIXED SMALL BUTTON */}
            <button className="mt-4 w-35 bg-blue-600 py-1.5 px-4 rounded-md text-sm shadow text-white inline-block">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          <ChevronRight />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
