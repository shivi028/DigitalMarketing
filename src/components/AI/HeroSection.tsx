"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    console.log("Canvas element:", canvas);

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.clearRect(0, 0, canvas.width, canvas.height);


    type ParticleType = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      update: () => void;
      draw: () => void;
    };

    const particles: ParticleType[] = [];
    const particleCount = 100;
    const connectionDistance = 100;

    class Particle implements ParticleType {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      canvas: HTMLCanvasElement;

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = "#6366f1";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvas.width) this.x = 0;
        else if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        else if (this.y < 0) this.y = this.canvas.height;
      }

      draw() {
        const ctx = this.canvas.getContext("2d");
        if (!ctx) return;
      
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }       

    function init() {
      if (!canvas) return; // Ensure canvas is not null
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas!)); // Use the "!" operator to assert it's not null
      }
    }
    

    function animate() {
      console.log("Animation running...");

      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    console.log("Particles before init:", particles);
    init();
    console.log("Particles after init:", particles);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 -z-10" />

      <div className="container px-4 md:px-6 z-10 ">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300"
          >
            <Sparkles className="mr-1 h-4 w-4" />
            <span>Revolutionizing Digital Marketing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 max-w-3xl"
          >
            AI-Powered Marketing Automation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl"
          >
            Harness the power of artificial intelligence to transform your marketing strategy, automate repetitive
            tasks, and deliver personalized experiences at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg">
              Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Bot className="h-5 w-5 text-indigo-500" />
          <span>Scroll to explore our AI solutions</span>
        </div>
      </motion.div>
    </section>
  );
}
