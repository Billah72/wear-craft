import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

/**
 * Developer note: use the uploaded file path as logo URL.
 * The system will transform this local path into a usable URL.
 */
const logoUrl = "#";

const Footer = () => {
  const categories = [
    "Dairy & Milk",
    "Snack & Spice",
    "Fast Food",
    "Juice & Drinks",
    "Bakery",
    "Seafood",
  ];
  const company = [
    "About us",
    "Delivery",
    "Legal Notice",
    "Terms & Conditions",
    "Secure Payment",
    "Contact us",
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-12 text-gray-700">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logoUrl}
                alt="Sakib logo"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Sakib</h2>
                <p className="text-xs text-gray-500">Grocery & Daily Needs</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 max-w-md">
              Sakib is the biggest market of grocery products.
              <br />
              Get your daily needs from our store — fast delivery & secure payment.
            </p>

            <div className="flex gap-3 justify-center sm:justify-start">
              <button
                className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:shadow transition cursor-pointer"
                aria-label="Google Play"
              >
                <FaAppStoreIos className="text-[#5caf90]"/>
                <span className="font-medium">Google Play</span>
              </button>

              <button
                className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:shadow transition cursor-pointer"
                aria-label="App Store"
              >
                <FaGooglePlay className="text-[#5caf90]"/>
                <span className="font-medium">App Store</span>
              </button>
            </div>
          </div>

          {/* Category */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Category</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((c, i) => (
                <li key={i} className="hover:text-green-600 transition-colors">
                  <a href="#" className="inline-block">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              {company.map((c, i) => (
                <li key={i} className="hover:text-green-600 transition-colors">
                  <a href="#" className="inline-block">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <HiOutlineLocationMarker className="text-green-600 w-5 h-5 mt-0.5" />
                <span className="text-gray-600">
                  2548 Broaddus Maple Court, Madisonville KY 4783, USA.
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <AiOutlinePhone className="text-green-600 w-5 h-5" />
                <a href="tel:+009876543210" className="text-gray-600 hover:text-green-600">+00 9876543210</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <AiOutlineMail className="text-green-600 w-5 h-5" />
                <a href="mailto:example@email.com" className="text-gray-600 hover:text-green-600">example@email.com</a>
              </li>
            </ul>

            <div className="flex gap-3 mt-4 justify-center sm:justify-start text-gray-600 text-lg">
              <a href="#" aria-label="Facebook" className="hover:text-green-600"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="hover:text-green-600"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-green-600"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram" className="hover:text-green-600"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p className="text-center sm:text-left">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-green-600 font-semibold">Sakib</span> — all rights reserved.
          </p>

          <div className="flex items-center gap-3 text-2xl text-gray-600">
            <FaCcVisa className="hover:text-green-600" />
            <FaCcMastercard className="hover:text-green-600" />
            <FaCcPaypal className="hover:text-green-600" />
            <FaCcAmex className="hover:text-green-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
