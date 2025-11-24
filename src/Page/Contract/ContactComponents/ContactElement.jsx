import React, { useState } from 'react';
import SectionHeading from '../../../Components/SharedComponents/SectionHeading';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { motion } from 'framer-motion';

// Dynamic & prettier contact form
// - Client-side validation with inline errors
// - Loading state + success / error feedback
// - Accessible form controls + focus styles
// - Example: POSTs to /api/contact (replace with your real endpoint)

const initialState = { name: '', phone: '', email: '', message: '' };

const ContactElement = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (form.phone && !/^\+?[0-9\s()-]{7,20}$/.test(form.phone)) e.phone = 'Enter a valid phone number.';
    if (!form.email) e.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please write a message.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate();
    if (Object.keys(eobj).length) {
      setErrors(eobj);
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      // Replace the below with your actual endpoint
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // });
      // const data = await res.json();
      // if (!res.ok) throw new Error(data?.message || 'Submission failed');

      // Simulate network delay for demo
      await new Promise((r) => setTimeout(r, 900));

      setStatus('success');
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="my-12">
        <div className="flex justify-center text-center mb-6">
          <SectionHeading
            heading={"Contact"}
            colorHeading={"With Us"}
            discription={
              "Customer service should not be a department. It should be the entire company."
            }
          />
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-8">
          <article className="w-full max-w-xs border border-gray-200 px-6 py-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex flex-col items-center">
              <div className="text-3xl border p-3 rounded-md my-2 border-gray-200 bg-white">
                <FaPhone aria-hidden="true" />
              </div>
              <p className="text-xl font-semibold text-gray-700">Contact By Phone</p>
              <div className="mt-2 text-center">
                <p className="leading-tight">Primary: <a href="tel:+8801753924093" className="text-blue-600">+88 01753 924093</a></p>
                <p className="leading-tight">Secondary: <a href="tel:+8801753924094" className="text-blue-600">+88 01753 924094</a></p>
              </div>
            </div>
          </article>

          <article className="w-full max-w-xs border border-gray-200 px-6 py-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex flex-col items-center">
              <div className="text-3xl border p-3 rounded-md my-2 border-gray-200 bg-white">
                <MdOutlineMail aria-hidden="true" />
              </div>
              <p className="text-xl font-semibold text-gray-700">Email Us</p>
              <div className="mt-2 text-center">
                <a href="mailto:info@example.com" className="text-blue-600">info@example.com</a>
              </div>
            </div>
          </article>

          <article className="w-full max-w-xs border border-gray-200 px-6 py-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex flex-col items-center">
              <div className="text-3xl border p-3 rounded-md my-2 border-gray-200 bg-white">
                <CiLocationOn aria-hidden="true" />
              </div>
              <p className="text-xl font-semibold text-gray-700">Address</p>
              <address className="mt-2 not-italic text-center text-sm text-gray-600">
                Ruami Mello Moraes Filho, 987<br />
                Salvador - MA, 40352<br />
                Brazil
              </address>
            </div>
          </article>
        </div>

        {/* Map + Form */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <motion.div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <iframe
              title="Our location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.485100878886!2d90.42419807479249!3d23.765734088188523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sBdcalling%20IT%20Ltd.%20-%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1762502803564!5m2!1sen!2sbd"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}>
            <form className="grid grid-cols-1 gap-4 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>

              {/* status message */}
              {status === 'success' && (
                <div className="p-3 rounded-md bg-green-50 text-green-800 border border-green-100">
                  Thanks — your message was sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 rounded-md bg-red-50 text-red-800 border border-red-100">
                  Something went wrong. Please try again later.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                  className={`mt-1 w-full py-3 border px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                  className={`mt-1 w-full py-3 border px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 ${errors.phone ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'}`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                  className={`mt-1 w-full py-3 border px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
                  className={`mt-1 w-full py-3 border px-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-offset-1 ${errors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'}`}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <div>
                <button type="submit" disabled={submitting} className="w-full py-3 rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium hover:brightness-105 transition disabled:opacity-60">
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-1">We respect your privacy — your data will only be used to contact you.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactElement;
