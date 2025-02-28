'use client'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CircleCard } from "./circle-card"
import { marketingServices } from "../data/marketing-services"

export default function DigitalMarketingGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Auto-animate through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === null || prev >= marketingServices.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {marketingServices.map((service, index) => (
          <CircleCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </div>
  )
}
