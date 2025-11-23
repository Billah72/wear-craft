import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const TopHeaer = () => {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="bg-[#f8f8f8] py-2 text-gray-700">
      <div className="container mx-auto px-4 md:px-24">
        {/* layout: stack on small, row on md+ */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-2 md:gap-0">
          {/* Left: contact numbers (wrap if needed) */}
          <div className="flex items-center gap-4 md:gap-8 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk className="text-lg" />
              <span className="text-[12px]">+8801632263666</span>
            </div>

            <div className="flex items-center gap-2">
              <BsWhatsapp className="text-lg" />
              <span className="text-[12px]">+8801632263666</span>
            </div>
          </div>

          {/* Middle: slogan (centered on mobile) */}
          <div className="text-[12px] text-center md:text-left px-2">
            <p className="truncate">World's Faster Online Shopping Destination</p>
          </div>

          {/* Right: links (hidden behind toggle on small screens) */}
          <div className="flex items-center gap-3">
            {/* Desktop links */}
            <div className="hidden md:flex items-center text-[12px] gap-6">
              <button className="hover:underline">Help</button>
              <button className="hover:underline">Track Order</button>
              <button className="hover:underline">English</button>
              <button className="hover:underline">Contact Us</button>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMoreOpen((s) => !s)}
                className="flex items-center gap-1 text-[12px] px-2 py-1 rounded-md hover:bg-gray-100"
                aria-expanded={moreOpen}
                aria-label={moreOpen ? "Close options" : "Open options"}
              >
                <span>More</span>
                {moreOpen ? (
                  <HiChevronUp className="w-4 h-4" />
                ) : (
                  <HiChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown for right links */}
        <div
          className={`md:hidden mt-2 transition-[max-height] duration-200 ease-in-out overflow-hidden ${
            moreOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 text-[12px] px-1">
            <button className="text-left w-full py-1 hover:underline">Help</button>
            <button className="text-left w-full py-1 hover:underline">Track Order</button>
            <button className="text-left w-full py-1 hover:underline">English</button>
            <button className="text-left w-full py-1 hover:underline">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaer;
