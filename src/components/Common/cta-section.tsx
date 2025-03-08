"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

interface CtaSectionProps {
  highlightedWord: string;
}

export function CtaSection({ highlightedWord }: CtaSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-indigo-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-500/30 px-4 py-1.5 text-sm font-medium mb-6"
          >
            <Sparkles className="mr-1 h-4 w-4" />
            <span>Transform Your Marketing Today</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Ready to Harness the Power of{" "}
            <span className="text-yellow-300">{highlightedWord}</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-indigo-100 mb-8"
          >
            Join thousands of businesses that have revolutionized their
            marketing with our {highlightedWord}-powered automation platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center items-center sm:flex-row gap-4 max-w-md mx-auto"
          >
            {/* <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            /> */}
            <Button className="bg-white text-indigo-600 hover:bg-indigo-100 text-lg font-bold">
              Schedule Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}
