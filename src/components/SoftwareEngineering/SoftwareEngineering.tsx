import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
// import { Player } from "@lottiefiles/react-lottie-player";
import { FaBrain, FaChartLine, FaRobot, FaCodeBranch } from "react-icons/fa";

export default function SoftwareEngineeringPage() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-24 px-6 bg-gradient-to-b from-black to-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
          Transforming Digital Marketing with Smart Engineering
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Discover How AI-Powered Solutions Can Boost Your Strategy
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition-all">
          Learn More
        </button>
      </section>

      {/* Dynamic Grid Layout */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[{
          icon: <FaBrain size={40} className="text-blue-400" />, title: "AI-Driven Insights",
          desc: "Unlock data-driven decision making for marketing strategies."
        }, {
          icon: <FaChartLine size={40} className="text-green-400" />, title: "Predictive Analytics",
          desc: "Optimize marketing campaigns using AI-powered predictions."
        }, {
          icon: <FaRobot size={40} className="text-yellow-400" />, title: "Automation Tools",
          desc: "Automate repetitive marketing tasks with smart workflows."
        }, {
          icon: <FaCodeBranch size={40} className="text-pink-400" />, title: "Custom Solutions",
          desc: "Tailor-made AI-driven software solutions for your business."
        }].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-gray-800 rounded-lg shadow-md text-center hover:bg-gray-700 cursor-pointer"
          >
            {feature.icon}
            <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Animated Infographics */}
      <section ref={ref} className="py-20 px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold text-blue-400">How AI Optimizes Digital Marketing</h2>
          {/* <Player autoplay loop src="https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json" className="w-72 h-72 mt-8" /> */}
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 flex flex-col items-center bg-black">
        <h2 className="text-3xl font-bold text-blue-400">Real-World Impact</h2>
        <video className="mt-8 w-full max-w-4xl rounded-xl shadow-lg" autoPlay muted loop>
          <source src="/ai-marketing.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  );
}
