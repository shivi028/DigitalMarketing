"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Database, Users, MessageSquare, BarChart, Zap, ArrowRight } from "lucide-react"

export function AiFlowchart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const flowSteps = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Collection",
      description: "Gather customer data from multiple touchpoints",
      delay: 0.1,
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Processing",
      description: "Analyze patterns and extract actionable insights",
      delay: 0.2,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Segmentation",
      description: "Create dynamic audience segments based on behavior",
      delay: 0.3,
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Content Creation",
      description: "Generate personalized content for each segment",
      delay: 0.4,
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automated Delivery",
      description: "Deploy content across channels at optimal times",
      delay: 0.5,
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Performance Analysis",
      description: "Measure results and continuously optimize",
      delay: 0.6,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50/30 to-white dark:from-indigo-950/10 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            How AI Transforms Your Marketing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Our intelligent automation workflow optimizes every step of your marketing process
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-700 dark:to-purple-700 transform -translate-y-1/2 rounded-full hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flowSteps.slice(0, 3).map((step, index) => (
              <FlowStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={step.delay}
                isInView={isInView}
                position={index === 2 ? "last" : index === 0 ? "first" : "middle"}
              />
            ))}
          </div>

          <div className="flex justify-center my-4 md:my-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-indigo-500 text-white p-2 rounded-full"
            >
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flowSteps.slice(3).map((step, index) => (
              <FlowStep
                key={index + 3}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={step.delay}
                isInView={isInView}
                position={index === 2 ? "last" : index === 0 ? "first" : "middle"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface FlowStepProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  isInView: boolean
  position: "first" | "middle" | "last"
}

function FlowStep({ icon, title, description, delay, isInView, position }: FlowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
        className="relative z-10 mb-4 bg-white dark:bg-gray-900 p-4 rounded-full border-2 border-indigo-500 shadow-lg"
      >
        <div className="text-indigo-500">{icon}</div>
      </motion.div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

