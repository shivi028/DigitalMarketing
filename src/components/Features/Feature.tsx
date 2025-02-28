'use client'
import { motion } from "framer-motion";
import { Camera, Globe, Megaphone, Rocket } from "lucide-react";
import FeatureCard from "../Products/FeatureCard";

const Feature = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description:
        "Boost your brand's presence with targeted ads and community engagement strategies that drive real results.",
    },
    {
      icon: Rocket,
      title: "Promotions & Campaigns",
      description:
        "Custom marketing strategies and influencer collaborations designed to elevate your brand's reach.",
    },
    {
      icon: Camera,
      title: "Creative Shoots",
      description:
        "Professional photography and video production services that capture your brand's unique story.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Custom, high-performing websites built to convert visitors into loyal customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-primary-darker font-['Open_Sans']">
      <div className="relative overflow-hidden">
        
      <div className="absolute inset-0 z-0">
        {/* Lighter Purple Background */}
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_50%_120%,rgba(215,195,255,0.4),rgba(100,80,180,0.2))]" />
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,rgba(215,195,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(215,195,255,0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Softer Light Purple Overlay */}
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,230,255,0.5),transparent_70%)]" />
      </div>

        {/* Hero Section */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl"
            >
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Digital Marketing Agency
              </span>
              
              <h2 className="mt-6 text-3xl md:text-4xl text-gray-300">
                We combine creativity with data-driven strategies to help your
                business thrive in the digital landscape.
              </h2>
              
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div className="relative z-10 pb-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-white sm:text-4xl"
              >
                Our Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 text-gray-300"
              >
                Comprehensive digital solutions to grow your business
              </motion.p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <FeatureCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
