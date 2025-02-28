"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F3E8FF] via-[#f4ecfc] to-[#dbc1f6] text-[#4A0072] px-6">
      {/* Container */}
      <div className="max-w-6xl mx-auto text-center lg:text-left space-y-10 pt-28 pb-16">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center"
        >
          Elevating Brands, Transforming Digital Presence
        </motion.h1>

        {/* Catchy Quote with Special Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white shadow-lg rounded-lg p-6 mx-auto max-w-lg border-l-8 border-[#855eaa]"
        >
          <Sparkles className="text-[#4e1772] w-8 h-8 absolute -top-4 -left-4" />
          <p className="text-lg md:text-xl font-semibold text-[#5B21B6] italic">
            "We don’t just market brands, we craft digital experiences that leave a mark."
          </p>
        </motion.div>

        {/* About Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[#4A0072]/80 leading-relaxed text-center"
        >
          At <strong>HiredEasy</strong>, we blend creativity with cutting-edge strategies to help businesses grow. <br/> Our expertise in <strong>SEO, social media marketing, content creation, and performance marketing</strong> ensures that your brand stands out in the digital space. Whether you're a startup or an established company, we create tailored solutions that <strong>drive results</strong>.
        </motion.p>

        {/* Services Overview (Animated Blocks) */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "SEO Optimization", desc: "Boost rankings & visibility" },
            { title: "Content Marketing", desc: "Engaging & impactful content" },
            { title: "Social Media", desc: "Grow & engage your audience" },
            { title: "PPC Advertising", desc: "Maximize ROI with ads" },
            { title: "Brand Strategy", desc: "Building a powerful identity" },
            { title: "Analytics & Insights", desc: "Data-driven marketing" },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 bg-white shadow-md rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-[#5B21B6]">{service.title}</h3>
              <p className="text-sm text-[#4A0072]/80 mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Stats & Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, label: "Clients Served", count: "500+" },
            { icon: TrendingUp, label: "Campaigns Optimized", count: "1200+" },
            { icon: Sparkles, label: "Brand Transformations", count: "300+" },
            { icon: Lightbulb, label: "Creative Strategies", count: "1000+" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-md"
            >
              <item.icon className="w-12 h-12 mx-auto text-[#5a3271] mb-4" />
              <h3 className="text-xl font-semibold">{item.count}</h3>
              <p className="text-[#371857]">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to take your brand to the next level?</h3>
          <Button size="lg" className="bg-gradient-to-r from-[#7156A2] to-[#9B5DE5] hover:opacity-90">
            <Link href='/contact'>Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
