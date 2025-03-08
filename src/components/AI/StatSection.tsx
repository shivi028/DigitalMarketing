"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedCounter } from "./Animates-counter"

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    {
      value: 85,
      unit: "%",
      label: "Increase in Marketing Efficiency",
      delay: 0.1,
    },
    {
      value: 3,
      unit: "x",
      label: "Higher Conversion Rates",
      delay: 0.2,
    },
    {
      value: 67,
      unit: "%",
      label: "Reduction in Campaign Setup Time",
      delay: 0.3,
    },
    {
      value: 24,
      unit: "/7",
      label: "Customer Engagement",
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 bg-indigo-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            AI-Driven Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto"
          >
            Our clients achieve remarkable outcomes with our AI marketing automation
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
                <AnimatedCounter from={0} to={stat.value} duration={2} delay={stat.delay} isInView={isInView} />
                <span>{stat.unit}</span>
              </div>
              <p className="text-indigo-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

