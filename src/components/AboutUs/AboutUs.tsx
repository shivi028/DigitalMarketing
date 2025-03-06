"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F3E8FF] via-[#FDF6C3] to-[#D4FCA8] text-[#3D0072] px-6 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#A3E635] rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#7B3FF7] rounded-full opacity-40"></div>
      
      {/* Container */}
      <div className="max-w-6xl mx-auto text-center lg:text-left space-y-10 pt-28 pb-16">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center relative inline-block"
        >
          Elevating Brands, <span className="underline decoration-[#FBBF24]">Transforming Digital Presence</span>
        </motion.h1>

        {/* Catchy Quote with Special Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white shadow-lg rounded-lg p-6 mx-auto max-w-lg border-l-8 border-[#7B3FF7]"
        >
          <Sparkles className="text-[#5E2EBE] w-8 h-8 absolute -top-4 -left-4" />
          <p className="text-lg md:text-xl font-semibold text-[#5B21B6] italic">
            &quot;We don&apos;t just market brands, we craft digital experiences that leave a mark.&quot;
          </p>
        </motion.div>

        {/* About Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[#4A0072]/80 leading-relaxed text-center"
        >
          At <strong>HiredEasy</strong>, we blend creativity with cutting-edge strategies to help businesses grow. <br/> Our expertise in <span className="underline decoration-[#A3E635] font-semibold">SEO, social media marketing, content creation, and performance marketing</span> ensures that your brand stands out in the digital space. Whether you&apos;re a startup or an established company, we create tailored solutions that <span className="font-bold text-[#7B3FF7]">drive results</span>.
        </motion.p>

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
              className="p-6 bg-white/20 rounded-xl shadow-lg backdrop-blur-md border-2 border-[#A3E635]/50"
            >
              <item.icon className="w-12 h-12 mx-auto text-[#5a3271] mb-4" />
              <h3 className="text-xl font-semibold underline decoration-[#FBBF24]">{item.count}</h3>
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
          <h3 className="text-2xl font-semibold mb-4 underline decoration-[#7B3FF7]">Ready to take your brand to the next level?</h3>
          <Button size="lg" className="bg-gradient-to-r from-[#7156A2] to-[#9B5DE5] hover:opacity-90">
            <Link href='/contact'>Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
