"use client"
import { motion } from "framer-motion"
import { LampContainer } from "../ui/lamp"

export default function YourMission() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 mb-20 mt-20 w-full">
      
      {/* Heading with Animation */}
      <motion.h1
        className="text-2xl sm:text-5xl font-bold bg-clip-text font-lora text-purple-500 p-2 relative tracking-tight sm:tracking-normal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Your Growth is Our{" "}
        <span className="relative inline-block">
          <em className="text-slate-950">Mission</em>
          <span className="absolute left-0 w-full h-2 bottom-[-8px]">
            <svg
              className="w-full h-full"
              role="presentation"
              viewBox="-320 -70.8161 640.4 59.82"
              preserveAspectRatio="none"
            >
              <path
                style={{ animationDuration: "0.2s" }}
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
      <div className="mt-5 w-full sm:max-w-4xl px-4 sm:px-6 text-center flex justify-center items-center">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-10 pt-8 md:pt-2 bg-gradient-to-br from-slate-100 to-slate-300 py-4 bg-clip-text text-center text-lg sm:text-4xl font-medium tracking-tight sm:tracking-normal text-transparent md:text-7xl font-lora"
          >
            <h2 className="text-lg sm:text-3xl font-bold mb-4 text-gray-800 font-lora mt-10 sm:mt-20 tracking-tight sm:tracking-normal">
              Why Choose Us? <br /> 
              <span className="text-slate-900 text-sm sm:text-[1.1rem] tracking-tight sm:tracking-normal font-lora font-light">
                At our digital marketing agency, we are dedicated to accelerating your business growth through strategic 
                innovations and data-driven methodologies. Our experts craft tailored campaigns that maximize ROI, build 
                long-term brand equity, and leverage advanced technologies to deliver measurable success. Transparency 
                is at the core of our approach, providing you with real-time insights and performance analytics to refine 
                and enhance your marketing strategy.
              </span>
            </h2>
          </motion.div> 
        </LampContainer>
      </div>
    </div>
  )
}
