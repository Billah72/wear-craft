import React, { useState } from "react";
import logo from "../../../assets/Image/logo.png";
import { CiUser } from "react-icons/ci";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const MinHeader = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 md:px-24 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Site logo"
              className="w-24 md:w-32 object-contain"
            />
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="w-full max-w-[700px]">
              <label htmlFor="search-desktop" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <input
                  id="search-desktop"
                  type="search"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-gray-300 outline-none text-sm"
                />
                <IoSearchOutline
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl cursor-pointer"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label={mobileSearchOpen ? "Close search" : "Open search"}
              onClick={() => setMobileSearchOpen((s) => !s)}
            >
              <IoSearchOutline className="text-2xl text-gray-700" />
            </button>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CiUser className="text-2xl md:text-3xl text-gray-700" />
                <div className="hidden sm:block leading-tight">
                  <p className="text-xs text-gray-500">Account</p>
                  <p className="text-sm font-medium">Login</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IoCartOutline className="text-2xl md:text-3xl text-gray-700" />
                <div className="hidden sm:block leading-tight">
                  <p className="text-xs text-gray-500">Cart</p>
                  <p className="text-sm font-medium">0 Items</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-3 md:hidden transition-max-h duration-300 ease-in-out overflow-hidden ${
            mobileSearchOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="px-1">
            <label htmlFor="search-mobile" className="sr-only">
              Search products
            </label>
            <div className="relative">
              <input
                id="search-mobile"
                type="search"
                placeholder="Search for products..."
                className="w-full pl-4 pr-12 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-gray-300 outline-none text-sm"
              />
              <IoSearchOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MinHeader;
