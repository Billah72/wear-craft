import React, { useMemo } from "react";
import { AiFillBank } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { PiContactlessPayment } from "react-icons/pi";

/**
 * Local uploaded image path (developer note: this will be transformed to a URL)
 * Change if you want different image for icon/background.
 */
const uploadedImage = "/mnt/data/91b11bb8-72c5-40e8-a56e-d46c3d6331e1.png";

const Support = () => {
  // memoize features so they don't get recreated on every render
  const features = useMemo(
    () => [
      {
        id: 1,
        title: "Free Shipping",
        subtitle: "Free Shipping on all US order or order above $200",
        icon: <PiContactlessPayment className="w-7 h-7" />,
      },
      {
        id: 2,
        title: "24x7 Support",
        subtitle: "Contact us 24 hours a day, 7 days a week",
        icon: <AiFillBank className="w-7 h-7" />,
      },
      {
        id: 3,
        title: "30 Days Return",
        subtitle: "Simply return it within 30 days for an exchange",
        icon: <IoCartOutline className="w-7 h-7" />,
      },
      {
        id: 4,
        title: "Payment Secure",
        subtitle: "Secure payment processing available 24/7",
        icon: <BiSupport className="w-7 h-7" />,
      },
    ],
    []
  );

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* grid: mobile 1, sm 2, lg 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((f) => (
            <article
              key={f.id}
              className="flex flex-col items-center text-center bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
              role="group"
              aria-labelledby={`feature-${f.id}-title`}
            >
              {/* icon circle - you can replace the content with <img src={uploadedImage} .../> if desired */}
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <div className="text-[#5caf90]">{f.icon}</div>
              </div>

              <h3
                id={`feature-${f.id}-title`}
                className="text-sm font-semibold text-gray-800 mb-2"
              >
                {f.title}
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed">{f.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

 
export default React.memo(Support);
