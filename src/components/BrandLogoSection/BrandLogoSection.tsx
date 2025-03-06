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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-indigo-900 text-white">
      <Head>
        <title>Digital Excellence | Marketing Agency</title>
        <meta name="description" content="Leading digital marketing agency transforming brands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="absolute w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-10 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10 -bottom-40 -right-20 animate-pulse"></div>
        
        <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Powering Brands with Digital Excellence
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Transforming ideas into impactful digital experiences for over a decade.
            We bring creativity, strategy, and results to every partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-indigo-500 to-cyan-400 py-3 px-8 rounded-full text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition duration-300 animate-pulse">
              Partner with Us
            </button>
            <button className="py-3 px-8 rounded-full text-white font-medium border border-white/20 backdrop-blur-sm hover:bg-white/10 transition duration-300">
              See Our Work
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="w-full h-64 md:h-96 relative">
            <div className="absolute inset-0  backdrop-blur-sm "></div>
            <div className="absolute inset-0 flex items-center justify-center ">
              <Image 
                src="/Image/homeabout.jpg" 
                alt="Digital Marketing Solutions" 
                width={650} 
                height={350}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Achievements Section */}
      <section ref={statsRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-24 relative border-t border-b border-white/10 bg-[#ffecd9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Delivering exceptional results through data-driven strategies and creative excellence for over 10 years.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-indigo-500/30 transition duration-300 text-center shadow-lg">
              <h3 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${statsVisible ? 'opacity-100' : 'opacity-0'}`}>
                675+
              </h3>
              <p className="text-xl mt-2 text-gray-800">Digital Experts</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-indigo-500/30 transition duration-300 text-center shadow-lg">
              <h3 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${statsVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '200ms'}}>
                4200+
              </h3>
              <p className="text-xl mt-2 text-gray-800">Projects Delivered</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-indigo-500/30 transition duration-300 text-center shadow-lg">
              <h3 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${statsVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '400ms'}}>
                97%
              </h3>
              <p className="text-xl mt-2 text-gray-800">Client Satisfaction</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-2 px-4 rounded inline-flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span className="font-bold">4.5/5</span>
              <span className="text-sm text-white/80">based on 500+ reviews on</span>
              <div className="flex gap-2">
                <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Showcase */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Our Clients
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Partnering with innovative brands across industries to deliver exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex justify-center mb-16">
            <div className="bg-[#f8ebde] bg-opacity-70 backdrop-blur-md rounded-2xl py-8 px-10 border border-indigo-500/30 shadow-lg shadow-indigo-500/10 relative overflow-hidden max-w-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-400"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600 rounded-full filter blur-3xl opacity-20 -z-10"></div>
              <h3 className="text-3xl md:text-5xl font-bold mb-2 text-white">Trusted By</h3>
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                2500+ Companies
              </div>
              <p className="text-2xl font-light text-white/80 mt-2">Globally</p>
              <a href="#" className="inline-flex items-center mt-4 text-indigo-900 hover:text-cyan-300 transition">
                See our clients 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
  {logos.map((logo, index) => (
    <div
      key={index}
      className="bg-white rounded-xl p-4 border border-white/10 hover:border-indigo-500/30 shadow-md transition duration-300 flex items-center justify-center group h-24"
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={90}
        height={40}
        className="opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
      />
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 relative bg-[#e2fa97] border-t border-b border-white/10">
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
      </section>

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