"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface CircleCardProps {
  icon: LucideIcon
  title: string
  description: string
  isActive: boolean
  onClick: () => void
  delay: number
}

export function CircleCard({ icon: Icon, title, description, isActive, onClick, delay }: CircleCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center cursor-pointer mb-3 ${
          isActive
            ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
            : "bg-white/10 text-gray-900 hover:bg-white/20"
        }`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={
          isActive
            ? {
                scale: [1, 1.05, 1],
                boxShadow: "0 0 15px rgba(79, 70, 229, 0.6)",
              }
            : {
                scale: 1,
                boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
              }
        }
        transition={{ duration: 0.3 }}
      >
        <Icon size={isActive ? 36 : 28} />

        {isActive && (
          <motion.div
            className="absolute -inset-1 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.2, 1.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)",
            }}
          />
        )}
      </motion.div>

      <motion.h3
        className="text-lg font-semibold mb-1"
        animate={{ color: isActive ? "#483f59" : "#1a202c" }} // Active: Deep Purple (#544172), Inactive: text-gray-900 (#1a202c)
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-sm max-w-[200px]"
        animate={{ color: isActive ? "#483f59" : "#1a202c", opacity: isActive ? 1 : 0.7 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
