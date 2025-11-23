import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="border-y border-gray-200 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Left: Categories (keeps visible but text short on xs) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md"
              aria-label="Open categories"
            >
              <BiCategory className="text-lg" />
              <span className="hidden sm:inline font-medium">All Categories</span>
            </button>
          </div>

          {/* Center: Desktop nav links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/shopnow" className={linkClass}>
              Shop Now
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact Us
            </NavLink>
          </div>

          {/* Right: Cart + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md"
              aria-label="Open cart"
            >
              <LuShoppingCart />
              <span className="hidden sm:inline font-medium">Cart</span>
            </button>

            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu (collapsible) */}
        <div
          className={`md:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-60 py-3" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/shopnow" className={linkClass} onClick={() => setOpen(false)}>
              Shop Now
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
