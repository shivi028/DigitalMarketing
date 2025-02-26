"use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import YourMission from "./YourMission";

// const brands = [
//   { name: "Brand 1", logo: "/Image/demo.png" },
//   { name: "Brand 2", logo: "/Image/team.png" },
//   { name: "Brand 3", logo: "/Image/indivisual.png" },
//   { name: "Brand 4", logo: "/Image/demo.png" },
//   { name: "Brand 5", logo: "/Image/team.png" },
//   { name: "Brand 6", logo: "/Image/demo.png" },
//   { name: "Brand 7", logo: "/Image/team.png" },
//   { name: "Brand 8", logo: "/Image/indivisual.png" },
//   { name: "Brand 9", logo: "/Image/demo.png" },
//   { name: "Brand 10", logo: "/Image/team.png" },
// ];

// const BrandLogoSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Create a duplicate array for seamless infinite scroll
//   const duplicatedBrands = [...brands, ...brands];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         if (prevIndex >= brands.length - 1) {
//           return 0;
//         }
//         return prevIndex + 1;
//       });
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       <div className="w-full overflow-hidden">
//         <div className="h-[50rem] w-full dark:bg-black bg-purple-200 dark:bg-grid-white/[0.2] bg-grid-black/[0.1] relative flex items-center justify-center flex-col">
//           {/* Radial gradient for the container to give a faded look */}
//           <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

//           <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
//             {/* Container for brands */}
//             <div className="container mx-auto px-4">
//               <motion.div
//                 className="flex space-x-12"
//                 animate={{
//                   x: `-${currentIndex * (100 / brands.length)}%`,
//                 }}
//                 transition={{
//                   duration: 1.2,
//                   ease: [0.4, 0.0, 0.2, 1],
//                 }}
//               >
//                 {duplicatedBrands.map((brand, index) => (
//                   <motion.div
//                     key={`${brand.name}-${index}`}
//                     className="flex-shrink-0 flex items-center justify-center"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     whileHover={{
//                       scale: 1.1,
//                       filter: "brightness(1.1)",
//                       boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
//                       y: -5,
//                     }}
//                     transition={{
//                       duration: 0.4,
//                       ease: "easeOut",
//                     }}
//                   >
//                     <motion.img
//                       src={brand.logo}
//                       alt={brand.name}
//                       className="w-40 h-auto object-contain"
//                       whileHover={{
//                         rotate: [0, -5, 5, -5, 0],
//                         transition: {
//                           duration: 0.5,
//                           ease: "easeInOut",
//                         },
//                       }}
//                     />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
         
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandLogoSlider;




import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaCoffee, FaBriefcase, FaMouse, FaUsers } from "react-icons/fa";

const BrandLogoSlider = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoContainerRef.current) return;

    const logos = Array.from(logoContainerRef.current.querySelectorAll(".logo-container")) as HTMLElement[];

    // Initially hide logos and position them below
    logos.forEach((logo) => {
      logo.style.opacity = "0";
      logo.style.transform = "translateY(50px)";
      logo.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const logo = entry.target as HTMLElement;
            logo.style.opacity = "1";
            logo.style.transform = "translateY(0)";
            logo.style.transitionDelay = `${index * 0.2}s`; // Staggered animation
          }
        });
      },
      { threshold: 0.2 }
    );

    logos.forEach((logo) => observer.observe(logo));

    return () => observer.disconnect();
  }, []);

  const logos = [
    { name: "Hydra Pro", src: "/Image/logo1.jpg" },
    { name: "VICE", src: "/Image/logo2.webp" },
    { name: "Jaggel", src: "/Image/logo3.webp" },
    { name: "Virgin Pure", src: "/Image/logo5.webp" },
    { name: "Naturally Mum", src: "/Image/logo6.webp" },
    { name: "Slingo", src: "/Image/logo7.webp" },
    { name: "Astis", src: "/Image/logo4.webp" },
    // { name: "Astis", src: "/Image/logo8.webp" },
  ];

  const stats = [
    { icon: <FaCoffee className="text-4xl md:text-5xl" />, label: "COFFEE CUPS", value: "20,800" },
    { icon: <FaBriefcase className="text-4xl md:text-5xl" />, label: "PROJECTS", value: "575" },
    { icon: <FaMouse className="text-4xl md:text-5xl" />, label: "WORKING DAYS", value: "4,412" },
    { icon: <FaUsers className="text-4xl md:text-5xl" />, label: "CLIENTS", value: "498" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FDE1D3] to-[#F6F6F7] py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Brand Logos Section */}
        <h1 className="text-2xl md:text-4xl font-semibold mb-8">
          OUR FOUNDERS HAVE HELPED BRANDS LIKE:
        </h1>
        <div
          ref={logoContainerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center"
        >
          {logos.map((logo, index) => (
            <div key={index} className="logo-container flex justify-center">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={80}
                height={60}
                className="w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 px-4 md:px-16">
          <div className="flex flex-wrap justify-center items-center text-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div  key={index} className="flex">
              <div className="flex flex-col items-center w-40">
                <div className="mb-2">{stat.icon}</div>
                <p className="text-sm uppercase tracking-wide">{stat.label}</p>
                <p className="text-3xl md:text-3xl font-bold">{stat.value}</p>
              </div>
              {index !== stats.length - 1 && <div className="w-16 hidden md:block  border-r-2 border-black"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogoSlider;
