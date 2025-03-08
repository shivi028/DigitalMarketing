"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, BarChart3, MessageSquare, PenTool, Target, Users } from "lucide-react"
import { FeatureCard } from "./FeatureCard"

export function FeatureGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Bot className="h-10 w-10 text-indigo-500" />,
      title: "AI-Powered Chatbots",
      description:
        "Engage visitors 24/7 with intelligent chatbots that learn from each interaction to provide better customer service.",
      delay: 0.1,
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-indigo-500" />,
      title: "Predictive Analytics",
      description:
        "Forecast trends and customer behavior with machine learning algorithms that analyze historical data.",
      delay: 0.2,
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-indigo-500" />,
      title: "Smart Content Curation",
      description: "Automatically generate and curate content tailored to your audience's preferences and behaviors.",
      delay: 0.3,
    },
    {
      icon: <PenTool className="h-10 w-10 text-indigo-500" />,
      title: "Automated Content Creation",
      description:
        "Create high-quality blog posts, social media content, and ad copy with AI-powered writing assistants.",
      delay: 0.4,
    },
    {
      icon: <Target className="h-10 w-10 text-indigo-500" />,
      title: "Precision Targeting",
      description: "Reach the right audience at the right time with AI-driven segmentation and targeting strategies.",
      delay: 0.5,
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-500" />,
      title: "Personalized User Journeys",
      description: "Deliver customized experiences for each user based on their behavior, preferences, and history.",
      delay: 0.6,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-indigo-50/30 dark:to-indigo-950/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            AI-Powered Marketing Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Leverage cutting-edge artificial intelligence to transform your digital marketing strategy
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

