"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function ClientTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote:
        "The AI-powered marketing automation has transformed how we engage with customers. We've seen a 40% increase in conversion rates since implementation.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      avatar: "/placeholder.svg?height=100&width=100",
      delay: 0.1,
    },
    {
      quote:
        "The predictive analytics feature helped us identify market trends months before our competitors. This has been a game-changer for our strategy.",
      author: "Michael Chen",
      role: "CMO, GrowthWave",
      avatar: "/placeholder.svg?height=100&width=100",
      delay: 0.2,
    },
    {
      quote:
        "We reduced our content creation time by 65% while simultaneously improving engagement. The ROI has been incredible.",
      author: "Jessica Williams",
      role: "Digital Marketing Lead, Innovate Inc",
      avatar: "/placeholder.svg?height=100&width=100",
      delay: 0.3,
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Success stories from businesses leveraging our AI marketing solutions
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: testimonial.delay }}
            >
              <Card className="h-full border-none shadow-lg  hover:shadow-indigo-300 bg-white dark:bg-gray-900 overflow-hidden">
                <CardContent className="p-6 ">
                  <Quote className="h-8 w-8 text-indigo-500 mb-4" />
                  <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

