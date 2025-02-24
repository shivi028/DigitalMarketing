"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import YourMission from "./YourMission";

const brands = [
  { name: "Brand 1", logo: "/Image/demo.png" },
  { name: "Brand 2", logo: "/Image/team.png" },
  { name: "Brand 3", logo: "/Image/indivisual.png" },
  { name: "Brand 4", logo: "/Image/demo.png" },
  { name: "Brand 5", logo: "/Image/team.png" },
  { name: "Brand 6", logo: "/Image/demo.png" },
  { name: "Brand 7", logo: "/Image/team.png" },
  { name: "Brand 8", logo: "/Image/indivisual.png" },
  { name: "Brand 9", logo: "/Image/demo.png" },
  { name: "Brand 10", logo: "/Image/team.png" },
];

const BrandLogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create a duplicate array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= brands.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="w-full overflow-hidden">
        <div className="h-[50rem] w-full dark:bg-black bg-purple-200 dark:bg-grid-white/[0.2] bg-grid-black/[0.1] relative flex items-center justify-center flex-col">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            {/* Container for brands */}
            <div className="container mx-auto px-4">
              <motion.div
                className="flex space-x-12"
                animate={{
                  x: `-${currentIndex * (100 / brands.length)}%`,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                {duplicatedBrands.map((brand, index) => (
                  <motion.div
                    key={`${brand.name}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      scale: 1.1,
                      filter: "brightness(1.1)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      y: -5,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <motion.img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-40 h-auto object-contain"
                      whileHover={{
                        rotate: [0, -5, 5, -5, 0],
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          {/* YourMission section */}
          <div className="mt-32">
            <YourMission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogoSlider;
