"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi"; // Import send icon

// Define TypeScript type for form data
type FormDataType = {
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Define fields array with fixed keys to avoid TypeScript indexing errors
  const fields = ["name", "phone", "email", "company"] as const;

  return (
    <div className="md:w-1/2 p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <motion.div
            key={field}
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]} // ✅ No TypeScript error now
              onChange={handleChange}
              required={field !== "company"}
              className="border w-full px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out bg-white shadow-none hover:shadow-[0px_0px_12px_#544172]"
              placeholder={
                field === "name"
                  ? "Your Name"
                  : field === "phone"
                  ? "Phone Number"
                  : field === "email"
                  ? "Email Address"
                  : "Company Name"
              }
            />
          </motion.div>
        ))}

        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="border w-full px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out bg-white shadow-none hover:shadow-[0px_0px_12px_#544172] appearance-none"
          >
            <option value="">Select Service</option>
            <option value="seo">SEO</option>
            <option value="ppc">PPC</option>
            <option value="social">Social Media</option>
            <option value="content">Content Marketing</option>
          </select>
        </motion.div>

        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border w-full px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out bg-white shadow-none hover:shadow-[0px_0px_12px_#544172]"
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </motion.div>

        {/* Button with Send Icon animation */}
        <motion.button
      type="submit"
      className=" w-full flex items-center justify-center bg-white text-[#544172] font-bold py-3 px-6 rounded-md border-2 border-[#544172] transition-all duration-300 ease-in-out hover:bg-[#544172] hover:text-white relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wrapper to prevent overlap */}
      <div className="relative flex items-center justify-center w-full h-6 overflow-hidden">
        {/* Text - Visible by default, hides on hover */}
        <motion.span
          className="absolute w-full text-center"
          animate={{ x: isHovered ? 50 : 0, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          Send Message
        </motion.span>

        {/* Icon - Hidden by default, appears on hover */}
        <motion.span
          className="absolute flex items-center justify-center w-full"
          animate={{ x: isHovered ? 0 : -50, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FiSend className="text-lg" />
        </motion.span>
      </div>

      {/* Background Animation Effect */}
      <motion.div
        className="absolute inset-0 bg-[#544172] rounded-md"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ zIndex: -1 }}
      />
    </motion.button>

      </form>
    </div>
  );
}
