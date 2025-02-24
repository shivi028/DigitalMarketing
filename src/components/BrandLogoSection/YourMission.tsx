"use client"
import { motion } from "framer-motion"

export default function YourMission() {
  return (
    <div className="flex flex-col items-center text-center px-6">
      
      {/* Heading with Animation */}
      <motion.h1
        className="text-5xl font-bold bg-clip-text font-lora text-color-bluePrimary p-2 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Your Growth is Our{" "}
        <span className="relative inline-block">
          <em>Mission</em>
          <span className="absolute left-0 w-full h-2 bottom-[-8px]">
            <svg
              className="w-full h-full"
              role="presentation"
              viewBox="-320 -70.8161 640.4 59.82"
              preserveAspectRatio="none"
            >
              <path
                style={{ animationDuration: "0s" }}
                d="M-300,-56 C-50,-72 298,-65 300,-59 C332,-53 -239,-36 -255,-27 C-271,-18 -88,-24 91,-20"
                stroke="#6f15bb"
                strokeWidth="7.777"
                fill="none"
              />
            </svg>
          </span>
        </span>
      </motion.h1>

      {/* Content Box */}
      <motion.div
        className="shadow p-8 mt-6 max-w-3xl font-lora relative bg-violet-100 rounded-lg pb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 font-lora">Why Choose Us?</h2>
        <p className="text-lg text-gray-600">
          At our digital marketing agency, we are dedicated to accelerating your business growth through strategic 
          innovations and data-driven methodologies. Our experts craft tailored campaigns that maximize ROI, build 
          long-term brand equity, and leverage advanced technologies to deliver measurable success. Transparency 
          is at the core of our approach, providing you with real-time insights and performance analytics to refine 
          and enhance your marketing strategy.
        </p>

        {/* Sparkling Animated Line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>

    </div>
  )
}
