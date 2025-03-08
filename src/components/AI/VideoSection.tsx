"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50/30 dark:from-background dark:to-indigo-950/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              See AI Marketing Automation in Action
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl text-muted-foreground"
            >
              Watch how our AI-powered platform transforms marketing workflows, increases efficiency, and delivers
              personalized experiences at scale.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 space-y-4"
            >
              {[
                "Automate repetitive marketing tasks",
                "Generate data-driven insights",
                "Create personalized content at scale",
                "Optimize campaigns in real-time",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-3 h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg">
                Schedule a Call
              </Button>
            </motion.div>
          </div>

          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 relative">
                <img
                  src="/Image/AiVideoCover.jpg"
                  alt="AI Marketing Automation Demo"
                  className="w-full h-full object-cover opacity-80"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="h-16 w-16 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>

                {/* Video overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Video controls bar */}
              <div className="bg-gray-900 text-white py-3 px-4 flex items-center justify-between">
                <div className="text-sm font-medium">AI Marketing Automation Demo</div>
                <div className="text-xs text-gray-400">3:45</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

