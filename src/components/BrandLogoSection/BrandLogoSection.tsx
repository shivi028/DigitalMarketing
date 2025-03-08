// "use client"
// import type { NextPage } from "next";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// export const BrandLogoSlider = () => {
//   const logos = [
//     { name: "HP", src: "/Image/logos/l1.webp" },
//     { name: "SoFi", src: "/Image/logos/l2.webp" },
//     { name: "Mitsubishi Motors", src: "/Image/logos/l3.webp" },
//     { name: "Champion", src: "/Image/logos/l4.webp" },
//     { name: "ESPN", src: "/Image/logos/l5.webp" },
//     { name: "Adobe", src: "/Image/logos/l1.webp" },
//     { name: "Western Union", src: "/Image/logos/l2.webp" },
//     { name: "Accor", src: "/Image/logos/l3.webp" },
//     { name: "CNN", src: "/Image/logos/l4.webp" },
//     { name: "PWC", src: "/Image/logos/l5.webp" },
//     { name: "DirecTV", src: "/Image/logos/l1.webp" },
//     { name: "LinkedIn", src: "/Image/logos/l2.webp" },
//     { name: "Ricoh", src: "/Image/logos/l3.webp" },
//     { name: "Tata", src: "/Image/logos/l4.webp" },
//     { name: "Tektronix", src: "/Image/logos/l5.webp" },
//     { name: "Intuit", src: "/Image/logos/l1.webp" },
//   ];

//   return (
//     <div className="relative h-screen bg-slate-950 flex flex-col items-center overflow-hidden mb-8 pb-8 px-4">
//       <BackgroundCellCore />
//       <div className="relative z-50 mt-20 text-center">
//         <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 mb-6">
//           <span className="text-4xl">Globally Recognized</span> <br />
//           Working With Renowned Brands
//         </h1>
//         <section className="w-full py-12">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12 justify-center items-center">
//             {logos.map((logo, index) => (
//               <div key={index} className="flex items-center justify-center">
//                 <Image
//                   src={logo.src || "/placeholder.svg"}
//                   alt={`${logo.name} logo`}
//                   width={100}
//                   height={100}
//                   className="object-contain filter invert"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// const BackgroundCellCore = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const ref = useRef<any>(null);

//   const handleMouseMove = (event: any) => {
//     const rect = ref.current && ref.current.getBoundingClientRect();
//     setMousePosition({
//       x: event.clientX - rect.left,
//       y: event.clientY - rect.top,
//     });
//   };

//   const size = 300;
//   return (
//     <div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       className="h-full absolute inset-0"
//     >
//       <div className="absolute h-[20rem] inset-y-0  overflow-hidden">
//         <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
//         <div
//           className="absolute inset-0 z-20 bg-transparent"
//           style={{
//             maskImage: `radial-gradient(
//             ${size / 4}px circle at center,
//            white, transparent
//           )`,
//             WebkitMaskImage: `radial-gradient(
//           ${size / 4}px circle at center,
//           white, transparent
//         )`,
//             WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
//               mousePosition.y - size / 2
//             }px`,
//             WebkitMaskSize: `${size}px`,
//             maskSize: `${size}px`,
//             pointerEvents: "none",
//             maskRepeat: "no-repeat",
//             WebkitMaskRepeat: "no-repeat",
//           }}
//         >
//           <Pattern cellClassName="border-blue-600 relative z-[100]" />
//         </div>
//         <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
//       </div>
//     </div>
//   );
// };

// const Pattern = ({
//   className,
//   cellClassName,
// }: {
//   className?: string;
//   cellClassName?: string;
// }) => {
//   const x = new Array(47).fill(0);
//   const y = new Array(30).fill(0);
//   const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
//   const [clickedCell, setClickedCell] = useState<any>(null);

//   return (
//     <div className={cn("flex flex-row  relative z-30", className)}>
//       {matrix.map((row, rowIdx) => (
//         <div
//           key={`matrix-row-${rowIdx}`}
//           className="flex flex-col  relative z-20 border-b"
//         >
//           {row.map((column, colIdx) => {
//             const controls = useAnimation();

//             useEffect(() => {
//               if (clickedCell) {
//                 const distance = Math.sqrt(
//                   Math.pow(clickedCell[0] - rowIdx, 2) +
//                     Math.pow(clickedCell[1] - colIdx, 2)
//                 );
//                 controls.start({
//                   opacity: [0, 1 - distance * 0.1, 0],
//                   transition: { duration: distance * 0.2 },
//                 });
//               }
//             }, [clickedCell]);

//             return (
//               <div
//                 key={`matrix-col-${colIdx}`}
//                 className={cn(
//                   "bg-transparent border-l border-b border-neutral-600",
//                   cellClassName
//                 )}
//                 onClick={() => setClickedCell([rowIdx, colIdx])}
//               >
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                   }}
//                   whileHover={{
//                     opacity: [0, 1, 0.5],
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     ease: "backOut",
//                   }}
//                   animate={controls}
//                   className="bg-[rgba(14,165,233,0.3)] h-12 w-12" //  rgba(14, 165, 233, 0.15) for a more subtle effect
//                 ></motion.div>
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };


// pages/index.js
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function BrandLogoSlider() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Sample data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      position: "CMO at TechVision",
      company: "TechVision",
      image: "/Image/scroll5.jpg",
      text: "The team delivered beyond our expectations. Our digital presence has transformed completely, resulting in a 276% increase in qualified leads."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Director of Marketing at GrowthBox",
      company: "GrowthBox",
      image: "/Image/scroll4.jpg",
      text: "Working with this agency has been transformational for our brand. They understand our audience and objectives perfectly."
    },
    {
      id: 3,
      name: "Jessica Patel",
      position: "CEO at EcoStride",
      company: "EcoStride",
      image: "/Image/scroll3.jpg",
      text: "From strategy to execution, their team demonstrated excellence at every step. Our campaign reached 3.4M people across platforms."
    }
  ];

  const caseStudies = [
    {
      id: 1,
      client: "TechVision",
      logo: "/Image/scroll8.jpg",
      result: "276% increase in qualified leads",
      description: "Complete digital transformation across all channels"
    },
    {
      id: 2,
      client: "GrowthBox",
      logo: "/Image/scroll9.jpg",
      result: "189% ROI on digital ad spend",
      description: "Optimized conversion funnel and targeting strategy"
    },
    {
      id: 3,
      client: "EcoStride",
      logo: "/Image/scroll4.jpg",
      result: "3.4M reach across social platforms",
      description: "Brand awareness campaign for sustainable product line"
    }
  ];

  const logos = [
    { name: "HP", src: "/Image/logos/l1.webp" },
    { name: "SoFi", src: "/Image/logos/l2.webp" },
    { name: "Mitsubishi Motors", src: "/Image/logos/l3.webp" },
    { name: "Champion", src: "/Image/logos/l4.webp" },
    { name: "ESPN", src: "/Image/logos/l5.webp" },
    { name: "Adobe", src: "/Image/logos/l1.webp" },
    { name: "Western Union", src: "/Image/logos/l2.webp" },
    { name: "Accor", src: "/Image/logos/l3.webp" },
    { name: "CNN", src: "/Image/logos/l4.webp" },
    { name: "PWC", src: "/Image/logos/l5.webp" },
   
   
  ];

  // Check if stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStatsVisible(true);
      }
    }, { threshold: 0.3 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-indigo-40 text-white">
      <Head>
        <title>Digital Excellence | Marketing Agency</title>
        <meta name="description" content="Leading digital marketing agency transforming brands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
     

      {/* Testimonials */}
      {/* <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 relative bg-[#e2fa97] border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="relative h-64 md:h-56 ">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 transition-all duration-500 ease-in-out ${
                  index === activeTestimonial 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8 pointer-events-none'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6 h-full shadow-lg p-3  bg-[#172554]">
                  <div className="flex-shrink-0 flex flex-row md:flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={60} 
                        height={60}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-blue-100">{testimonial.name}</p>
                      <p className="text-sm text-white">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                    <p className="italic text-white">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial 
                    ? 'bg-indigo-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-[#ffecd9] bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore how we've helped leading brands achieve remarkable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-[#ffecd9] backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/30 hover:bg-white/10 transition duration-300 group"
              >
                <div className="h-48 relative">
                  <Image 
                    src={`${study.logo}`} 
                    alt={`${study.client} case study`} 
                    width={400} 
                    height={320}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent w-full h-24"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg- p-2 rounded">
                   
                      <button className='h-8 w-auto border p-2 flex justify-center items-center rounded-xl bg-blue-800'>Schedule Call</button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{study.client}</h3>
                  <div className="bg-indigo-900/50 rounded-lg px-3 py-1 text-cyan-400 text-sm font-medium inline-block mb-3">
                    {study.result}
                  </div>
                  <p className="text-blue-500 mb-4">{study.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-cyan-400 group-hover:text-cyan-300 transition"
                  >
                    Read Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}